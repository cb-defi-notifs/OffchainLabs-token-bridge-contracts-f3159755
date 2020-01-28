#!/usr/bin/env python3

# Copyright 2019, Offchain Labs, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# ----------------------------------------------------------------------------
# arb-deploy
# ----------------------------------------------------------------------------

import argparse
import os
import sys
import json

import build_validator_docker
import setup_states
from support.run import run

# package configuration
NAME = "arb-deploy"
DESCRIPTION = "Manage Arbitrum dockerized deployments"

# filename constants
DOCKER_COMPOSE_FILENAME = "docker-compose.yml"

### ----------------------------------------------------------------------------
### docker-compose template
### ----------------------------------------------------------------------------

# Parameters: number of validators,
# absolute path to state folder, absolute path to contract
COMPOSE_HEADER = """# Machine generated by `arb-deploy`. Do not version control.
version: '3'
services:
    dockerhost:
        image: qoomon/docker-host
        cap_add: [ 'NET_ADMIN', 'NET_RAW' ]
        restart: on-failure
    arb-validator0:
        depends_on:
            - dockerhost
        volumes:
            - %s:/home/user/state
        image: arb-validator
        command: validate --rpc state/contract.ao state/private_key.txt ws://dockerhost:%s %s %s
        ports:
            - '1235:1235'
            - '1236:1236'
"""


def compose_header(state_abspath, ws_port, rollup_address, db_path):
    return COMPOSE_HEADER % (state_abspath, ws_port, rollup_address, db_path)


# Parameters: validator id, absolute path to state folder,
# absolute path to contract, validator id
COMPOSE_VALIDATOR = """
    arb-validator%d:
        depends_on:
            - dockerhost
        volumes:
            - %s:/home/user/state
        image: arb-validator
        command: validate state/contract.ao state/private_key.txt ws://dockerhost:%s %s %s
"""


# Returns one arb-validator declaration for a docker compose file
def compose_validator(validator_id, state_abspath, ws_port, rollup_address, db_path):
    return COMPOSE_VALIDATOR % (
        validator_id,
        state_abspath,
        ws_port,
        rollup_address,
        db_path,
    )


### ----------------------------------------------------------------------------
### Deploy
### ----------------------------------------------------------------------------


# Compile contracts to `contract.ao` and export to Docker and run validators
def deploy(sudo_flag, build_flag, up_flag, validator_states_dir):
    # Stop running Arbitrum containers
    halt_docker(sudo_flag)

    with open(os.path.join(validator_states_dir, "config.json")) as json_file:
        data = json.load(json_file)
        rollup_address = data["rollup_address"]
        n_validators = data["validator_count"]
        ws_port = data["websocket_port"]

    # Overwrite DOCKER_COMPOSE_FILENAME
    states_path = os.path.abspath(
        os.path.join(validator_states_dir, setup_states.VALIDATOR_STATE)
    )
    compose = os.path.abspath("./" + DOCKER_COMPOSE_FILENAME)

    contents = compose_header(
        states_path % 0, ws_port, rollup_address, "state/checkpoint_db"
    ) + "".join(
        [
            compose_validator(
                i, states_path % i, ws_port, rollup_address, "state/checkpoint_db"
            )
            for i in range(1, n_validators)
        ]
    )
    with open(compose, "w") as f:
        f.write(contents)

    # Build
    if not up_flag or build_flag:
        if build_validator_docker.build_validator(sudo_flag) != 0:
            exit(1)

    # Run
    if not build_flag or up_flag:
        print("Deploying", n_validators, "validators for rollup", rollup_address)
        run("docker-compose -f %s up" % compose, sudo=sudo_flag)


def halt_docker(sudo_flag):
    # Check for DOCKER_COMPOSE_FILENAME and halt if running
    if os.path.isfile("./" + DOCKER_COMPOSE_FILENAME):
        run(
            "docker-compose -f ./%s down -t 0" % DOCKER_COMPOSE_FILENAME,
            sudo=sudo_flag,
            capture_stdout=True,
        )

    # Kill and rm all docker containers and images created by any `arb-deploy`
    ps = "grep -e 'arb-validator' | awk '{ print $1 }'"
    if run("docker ps | " + ps, capture_stdout=True, quiet=True, sudo=sudo_flag) != "":
        run(
            "docker kill $("
            + ("sudo " if sudo_flag else "")
            + "docker ps | "
            + ps
            + ")",
            capture_stdout=True,
            sudo=sudo_flag,
        )
        run(
            "docker rm $("
            + ("sudo " if sudo_flag else "")
            + "docker ps -a | "
            + ps
            + ")",
            capture_stdout=True,
            sudo=sudo_flag,
        )


### ----------------------------------------------------------------------------
### Command line interface
### ----------------------------------------------------------------------------


def main():
    parser = argparse.ArgumentParser(prog=NAME, description=DESCRIPTION)
    # Required
    parser.add_argument("dir", help="The validator states directory.")
    # Optional

    parser.add_argument(
        "-s",
        "--sudo",
        action="store_true",
        dest="sudo",
        help="Run docker-compose with sudo",
    )
    group = parser.add_mutually_exclusive_group()
    group.add_argument(
        "--build",
        action="store_true",
        dest="build",
        help="Run docker-compose build only",
    )
    group.add_argument(
        "--up", action="store_true", dest="up", help="Run docker-compose up only"
    )

    args = parser.parse_args()

    # Deploy
    deploy(args.sudo, args.build, args.up, args.dir)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(1)
