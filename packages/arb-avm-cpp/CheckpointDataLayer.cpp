//
//  DataMapper.cpp
//  avm
//
//  Created by Minh Truong on 9/16/19.
//

#include "CheckpointDataLayer.hpp"
#include <vector>
#include "avm/tuple.hpp"
#include "avm/value.hpp"

// std::string CheckpointDataLayer::ConvertMachineCode(std::vector<CodePoint>
// codes){
//
//    std::vector<unsigned char> code_values;
//
//    for(auto code : codes){
//        code_values.push_back((uint8_t)code.op.opcode);
//    }
//
//    std::string str(code_values.begin(), code_values.end());
//    return str;
//};

using UCharVec = std::vector<unsigned char>;

std::string dbPath = "tmp/rocksDbPath";
std::string machine_code_key = "machine_code";

bool CheckpointDataLayer::Intialize() {
    rocksdb::Options options;
    rocksdb::TransactionDBOptions txn_options;
    options.create_if_missing = true;

    auto status =
        rocksdb::TransactionDB::Open(options, txn_options, dbPath, &txn_db);

    return status.ok();
};

void CheckpointDataLayer::Close() {
    delete txn_db;
}

rocksdb::Status SaveDataStack(const datastack& stack) {
    auto value_vector = stack.values;

    for (auto& val : value_vector) {
    }
}

rocksdb::Status CheckpointDataLayer::SaveValue(const CodePoint& val) {
    auto hash_key = GetHashKey(val);
}

rocksdb::Status CheckpointDataLayer::SaveValue(const uint256_t& val) {
    auto hash_key = GetHashKey(val);
}

rocksdb::Status CheckpointDataLayer::SaveValue(const Tuple& val) {
    auto hash_key = GetHashKey(val);
    auto value_to_store = std::string();

    for (uint64_t i = 0; i < val.tuple_size(); i++) {
        auto item = val.get_element(i);
        //        auto value_type = GetType(item);
        auto processed_value = ProcessValue(item);
        auto status = std::get<0>(processed_value);
        auto value_str = std::get<1>(processed_value);

        if (status.ok()) {
            value_to_store += value_str;
        } else {
            // log
        }
    }

    auto save_status = SaveValue(value_to_store, hash_key);

    return save_status;
};

rocksdb::Status CheckpointDataLayer::SaveValue(std::string val,
                                               std::string key) {
    auto [ref_count, value] = GetValueAndCount(key);

    if (ref_count < 1) {
        value = val;
    }
    ref_count += 1;

    auto updated_value = SerializeCountAndValue(ref_count, value);

    // make sure this is correct
    rocksdb::WriteOptions writeOptions;
    rocksdb::Transaction* transaction = txn_db->BeginTransaction(writeOptions);
    assert(transaction);

    auto put_status = transaction->Put(key, updated_value);
    assert(put_status.ok());

    auto commit_status = transaction->Commit();
    assert(commit_status.ok());

    return commit_status;
};

// use variant to return status error or value
std::tuple<int, std::string> CheckpointDataLayer::GetValueAndCount(
    std::string hash_key) {
    rocksdb::ReadOptions read_options;
    std::string return_value;

    auto get_status = txn_db->Get(read_options, hash_key, &return_value);
    if (get_status.ok()) {
        return ParseCountAndValue(return_value);
    } else {
        return std::make_tuple(0, std::string());
    }
}

rocksdb::Status CheckpointDataLayer::DeleteValue(std::string key) {
    rocksdb::WriteOptions writeOptions;
    rocksdb::Transaction* transaction = txn_db->BeginTransaction(writeOptions);
    assert(transaction);

    auto delete_status = transaction->Delete(key);
    assert(delete_status.ok());

    auto commit_status = transaction->Commit();
    assert(commit_status.ok());

    return commit_status;
}

std::string CheckpointDataLayer::GetHashKey(const value& val) {
    auto hash_key = hash(val);

    std::vector<unsigned char> hash_key_vector;
    marshal_value(hash_key, hash_key_vector);

    return std::string(hash_key_vector.begin(), hash_key_vector.end());
}

std::tuple<int, std::string> ParseCountAndValue(std::string string_value) {
    // is max 256 references good enough?
    const char* c_string = string_value.c_str();
    auto ref_count = (int)c_string[0];

    // skips exactly the first char(byte) in order to extract value saved?
    auto saved_value = string_value.substr(1, string_value.size() - 1);

    return std::make_tuple(ref_count, saved_value);
}

std::string SerializeCountAndValue(int count, std::string value) {
    if (count > 255) {
        // error
    } else {
        auto count_as_char = (char)count;
        // does not replace
        value.insert(value.begin(), count_as_char);
    }
}

std::string GetHash(const value& val) {
    auto hash_key = hash(val);

    std::vector<unsigned char> hash_key_vector;
    marshal_value(hash_key, hash_key_vector);

    return std::string(hash_key_vector.begin(), hash_key_vector.end());
}

enum value_types { UINT_256, CODE_PC, TUPL, STACK, VM_STATE };

struct ValueProcessor {
    // is it correctly intialized?
    CheckpointDataLayer cp;

    std::tuple<rocksdb::Status, std::string> operator()(const Tuple& value) {
        auto status = cp.SaveValue(value);

        std::string return_value;

        auto type_code = (char)TUPLE;
        auto hash_key = GetHash(value);

        // make sure this works as intended
        return_value += type_code;
        return_value += hash_key;

        return std::make_tuple(status, return_value);
    }

    // make sure thats a success status
    std::tuple<rocksdb::Status, std::string> operator()(
        const uint256_t& value) {
        std::string return_value;

        auto type_code = (char)NUM;
        // makesure correct conversion
        std::ostringstream ss;
        ss << value;
        auto value_str = ss.str();

        // make sure this works as intended
        return_value += type_code;
        return_value += value_str;

        return std::make_tuple(rocksdb::Status(), return_value);
    }

    std::tuple<rocksdb::Status, std::string> operator()(
        const CodePoint& value) {
        std::string return_value;

        auto type_code = (char)CODEPT;
        // fine?
        auto value_str = std::to_string(value.pc);

        // make sure this works as intended
        return_value += type_code;
        return_value += value_str;

        return std::make_tuple(rocksdb::Status(), return_value);
    }
};

struct Serializer {
    std::string operator()(const Tuple& value) {
        std::string return_value;

        auto type_code = (char)TUPLE;
        auto hash_key = GetHash(value);

        // make sure this works as intended
        return_value += type_code;
        return_value += hash_key;
        return_value += hash_to_next;

        return return_value;
    }

    // make sure thats a success status
    std::string operator()(const uint256_t& value) {
        std::string return_value;

        auto type_code = (char)NUM;
        // makesure correct conversion
        std::ostringstream ss;
        ss << value;
        auto value_str = ss.str();

        // make sure this works as intended
        return_value += type_code;
        return_value += value_str;
        return_value += hash_to_next;

        return return_value;
    }

    std::string operator()(const CodePoint& value) {
        std::string return_value;

        auto type_code = (char)CODEPT;
        // fine?
        auto value_str = std::to_string(value.pc);

        // make sure this works as intended
        return_value += type_code;
        return_value += value_str;
        return_value += hash_to_next;

        return return_value;
    }
};

std::tuple<rocksdb::Status, std::string> CheckpointDataLayer::ProcessValue(
    const value& value) {
    return nonstd::visit(ValueProcessor{}, value);
}

std::string CheckpointDataLayer::Serialize(const value& value) {
    return nonstd::visit(Serializer{}, value);
}
