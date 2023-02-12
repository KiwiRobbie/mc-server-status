import urllib.request
import json
from datetime import datetime

CONFIG_FILEPATH = "/home/kiwi/Dev/mc-server-status/src/config.json"

result = urllib.request.urlopen("https://ifconfig.me").read()
public_ip = result.decode('ascii')


config = {
    "updated": str(datetime.now()),
    "servers": [
        {
            "name": "the rob server",
            "address": public_ip
        },
        {
            "name": "Hypixel",
            "address": "mc.Hypixel.net",
        },
    ]
}

with open(CONFIG_FILEPATH, 'w') as f:
    json.dump(config, f)