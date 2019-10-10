import requests
import os
import json
from web3 import Web3, HTTPProvider
from web3.middleware import geth_poa_middleware
from enum import Enum
import logging
import json


config = json.load(open(os.environ.get("PWD") + '/.env', 'r'))
for key, value in config.items():
    os.environ[key] = value

for request in range(0, 30):
    # temp = Web3(HTTPProvider(os.environ.get('WEB3_INFURA_RPC')))
    temp = Web3(HTTPProvider(os.environ.get('WEB3_STAGING_RPC')))
    # temp = Web3(HTTPProvider(os.environ.get('WEB3_DEVELOP_RPC')))

    print(temp.eth.blockNumber)