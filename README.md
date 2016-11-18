# Amixer-parser

## Usage

```javascript
const AmixerParser = require('amixer-parser');

const amixer = new AmixerParser();
amixer.read()
  .then((result) => {
    console.log(result);
  });
```

```javascript
{
  // First audio card
  "0": [
    {
      "numid": 10,
      "iface": "CARD",
      "name": "Line Out Jack",
      "specs": {
        "type": "BOOLEAN",
        "rights": "r-------",
        "count": 1
      },
      "value": false,
      "originalValue": "off"
    },
    {
      "numid": 9,
      "iface": "CARD",
      "name": "Mic Jack",
      "specs": {
        "type": "BOOLEAN",
        "rights": "r-------",
        "count": 1
      },
      "value": false,
      "originalValue": "off"
    },
    {
      "numid": 2,
      "iface": "MIXER",
      "name": "Master Playback Switch",
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 2
      },
      "value": [
        true,
        true
      ],
      "originalValue": "on,on"
    },
    {
      "numid": 1,
      "iface": "MIXER",
      "name": "Master Playback Volume",
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 2
      },
      "value": [
        64,
        64
      ],
      "originalValue": "64,64"
    },
    {
      "numid": 13,
      "iface": "MIXER",
      "name": "PCM Playback Volume",
      "specs": {
        "type": "INTEGER",
        "rights": "rw---RW-",
        "count": 2
      },
      "value": [
        255,
        255
      ],
      "originalValue": "255,255"
    },
    {
      "numid": 8,
      "iface": "MIXER",
      "name": "Mic Boost Volume",
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 2
      },
      "value": [
        0,
        0
      ],
      "originalValue": "0,0"
    },
    {
      "numid": 5,
      "iface": "MIXER",
      "name": "Mic Playback Switch",
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 2
      },
      "value": [
        false,
        false
      ],
      "originalValue": "off,off"
    },
    {
      "numid": 4,
      "iface": "MIXER",
      "name": "Mic Playback Volume",
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 2
      },
      "value": [
        0,
        0
      ],
      "originalValue": "0,0"
    },
    {
      "numid": 7,
      "iface": "MIXER",
      "name": "Capture Switch",
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 2
      },
      "value": [
        true,
        true
      ],
      "originalValue": "on,on"
    },
    {
      "numid": 6,
      "iface": "MIXER",
      "name": "Capture Volume",
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 2
      },
      "value": [
        28,
        28
      ],
      "originalValue": "28,28"
    },
    {
      "numid": 3,
      "iface": "MIXER",
      "name": "Loopback Mixing",
      "specs": {
        "type": "ENUMERATED",
        "rights": "rw------",
        "count": 1
      },
      "value": null,
      "originalValue": "1"
    },
    {
      "numid": 12,
      "iface": "PCM",
      "name": "Capture Channel Map",
      "specs": {
        "type": "INTEGER",
        "rights": "r----R--",
        "count": 2
      },
      "value": [
        3,
        4
      ],
      "originalValue": "3,4"
    },
    {
      "numid": 11,
      "iface": "PCM",
      "name": "Playback Channel Map",
      "specs": {
        "type": "INTEGER",
        "rights": "r----R--",
        "count": 2
      },
      "value": [
        3,
        4
      ],
      "originalValue": "3,4"
    }
  ],
  // Second audio card
  "1": [
    {
      "numid": 1,
      "iface": "CARD",
      "name": "HDMI/DP",
      "specs": {
        "type": "BOOLEAN",
        "rights": "r-------",
        "count": 1
      },
      "value": false,
      "originalValue": "off"
    },
    {
      "numid": 7,
      "iface": "CARD",
      "name": "HDMI/DP",
      "specs": {
        "type": "BOOLEAN",
        "rights": "r-------",
        "count": 1
      },
      "value": false,
      "originalValue": "off"
    },
    {
      "numid": 13,
      "iface": "CARD",
      "name": "HDMI/DP",
      "specs": {
        "type": "BOOLEAN",
        "rights": "r-------",
        "count": 1
      },
      "value": true,
      "originalValue": "on"
    },
    {
      "numid": 19,
      "iface": "CARD",
      "name": "HDMI/DP",
      "specs": {
        "type": "BOOLEAN",
        "rights": "r-------",
        "count": 1
      },
      "value": false,
      "originalValue": "off"
    },
    {
      "numid": 2,
      "iface": "MIXER",
      "name": "IEC958 Playback Con Mask",
      "specs": {
        "type": "IEC958",
        "rights": "r-------",
        "count": 1
      },
      "value": {
        "AES0": 15,
        "AES1": 255,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x0f AES1=0xff AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 8,
      "iface": "MIXER",
      "name": "IEC958 Playback Con Mask",
      "index": 1,
      "specs": {
        "type": "IEC958",
        "rights": "r-------",
        "count": 1
      },
      "value": {
        "AES0": 15,
        "AES1": 255,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x0f AES1=0xff AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 14,
      "iface": "MIXER",
      "name": "IEC958 Playback Con Mask",
      "index": 2,
      "specs": {
        "type": "IEC958",
        "rights": "r-------",
        "count": 1
      },
      "value": {
        "AES0": 15,
        "AES1": 255,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x0f AES1=0xff AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 20,
      "iface": "MIXER",
      "name": "IEC958 Playback Con Mask",
      "index": 3,
      "specs": {
        "type": "IEC958",
        "rights": "r-------",
        "count": 1
      },
      "value": {
        "AES0": 15,
        "AES1": 255,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x0f AES1=0xff AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 3,
      "iface": "MIXER",
      "name": "IEC958 Playback Pro Mask",
      "specs": {
        "type": "IEC958",
        "rights": "r-------",
        "count": 1
      },
      "value": {
        "AES0": 15,
        "AES1": 0,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x0f AES1=0x00 AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 9,
      "iface": "MIXER",
      "name": "IEC958 Playback Pro Mask",
      "index": 1,
      "specs": {
        "type": "IEC958",
        "rights": "r-------",
        "count": 1
      },
      "value": {
        "AES0": 15,
        "AES1": 0,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x0f AES1=0x00 AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 15,
      "iface": "MIXER",
      "name": "IEC958 Playback Pro Mask",
      "index": 2,
      "specs": {
        "type": "IEC958",
        "rights": "r-------",
        "count": 1
      },
      "value": {
        "AES0": 15,
        "AES1": 0,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x0f AES1=0x00 AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 21,
      "iface": "MIXER",
      "name": "IEC958 Playback Pro Mask",
      "index": 3,
      "specs": {
        "type": "IEC958",
        "rights": "r-------",
        "count": 1
      },
      "value": {
        "AES0": 15,
        "AES1": 0,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x0f AES1=0x00 AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 4,
      "iface": "MIXER",
      "name": "IEC958 Playback Default",
      "specs": {
        "type": "IEC958",
        "rights": "rw--l---",
        "count": 1
      },
      "value": {
        "AES0": 4,
        "AES1": 130,
        "AES2": 0,
        "AES3": 2
      },
      "originalValue": "[AES0=0x04 AES1=0x82 AES2=0x00 AES3=0x02]"
    },
    {
      "numid": 10,
      "iface": "MIXER",
      "name": "IEC958 Playback Default",
      "index": 1,
      "specs": {
        "type": "IEC958",
        "rights": "rw------",
        "count": 1
      },
      "value": {
        "AES0": 4,
        "AES1": 0,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x04 AES1=0x00 AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 16,
      "iface": "MIXER",
      "name": "IEC958 Playback Default",
      "index": 2,
      "specs": {
        "type": "IEC958",
        "rights": "rw------",
        "count": 1
      },
      "value": {
        "AES0": 4,
        "AES1": 0,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x04 AES1=0x00 AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 22,
      "iface": "MIXER",
      "name": "IEC958 Playback Default",
      "index": 3,
      "specs": {
        "type": "IEC958",
        "rights": "rw------",
        "count": 1
      },
      "value": {
        "AES0": 4,
        "AES1": 0,
        "AES2": 0,
        "AES3": 0
      },
      "originalValue": "[AES0=0x04 AES1=0x00 AES2=0x00 AES3=0x00]"
    },
    {
      "numid": 5,
      "iface": "MIXER",
      "name": "IEC958 Playback Switch",
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 1
      },
      "value": true,
      "originalValue": "on"
    },
    {
      "numid": 11,
      "iface": "MIXER",
      "name": "IEC958 Playback Switch",
      "index": 1,
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 1
      },
      "value": true,
      "originalValue": "on"
    },
    {
      "numid": 17,
      "iface": "MIXER",
      "name": "IEC958 Playback Switch",
      "index": 2,
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 1
      },
      "value": true,
      "originalValue": "on"
    },
    {
      "numid": 23,
      "iface": "MIXER",
      "name": "IEC958 Playback Switch",
      "index": 3,
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 1
      },
      "value": true,
      "originalValue": "on"
    },
    {
      "numid": 6,
      "iface": "PCM",
      "name": "ELD",
      "device": 3,
      "specs": {
        "type": "BYTES",
        "rights": "r--v----",
        "count": 0
      },
      "value": ""
    },
    {
      "numid": 25,
      "iface": "PCM",
      "name": "Playback Channel Map",
      "device": 3,
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 8
      },
      "value": [
        3,
        4,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "originalValue": "3,4,0,0,0,0,0,0"
    },
    {
      "numid": 12,
      "iface": "PCM",
      "name": "ELD",
      "device": 7,
      "specs": {
        "type": "BYTES",
        "rights": "r--v----",
        "count": 0
      },
      "value": ""
    },
    {
      "numid": 26,
      "iface": "PCM",
      "name": "Playback Channel Map",
      "device": 7,
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 8
      },
      "value": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "originalValue": "0,0,0,0,0,0,0,0"
    },
    {
      "numid": 27,
      "iface": "PCM",
      "name": "Playback Channel Map",
      "device": 8,
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 8
      },
      "value": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "originalValue": "0,0,0,0,0,0,0,0"
    },
    {
      "numid": 24,
      "iface": "PCM",
      "name": "ELD",
      "device": 9,
      "specs": {
        "type": "BYTES",
        "rights": "r--v----",
        "count": 0
      },
      "value": ""
    },
    {
      "numid": 28,
      "iface": "PCM",
      "name": "Playback Channel Map",
      "device": 9,
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 8
      },
      "value": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "originalValue": "0,0,0,0,0,0,0,0"
    }
  ],
  // Third audio card
  "2": [
    {
      "numid": 3,
      "iface": "MIXER",
      "name": "PCM Playback Switch",
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 1
      },
      "value": true,
      "originalValue": "on"
    },
    {
      "numid": 4,
      "iface": "MIXER",
      "name": "PCM Playback Volume",
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 2
      },
      "value": [
        44,
        44
      ],
      "originalValue": "44,44"
    },
    {
      "numid": 5,
      "iface": "MIXER",
      "name": "Mic Capture Switch",
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 1
      },
      "value": true,
      "originalValue": "on"
    },
    {
      "numid": 6,
      "iface": "MIXER",
      "name": "Mic Capture Volume",
      "specs": {
        "type": "INTEGER",
        "rights": "rw---R--",
        "count": 1
      },
      "value": 0,
      "originalValue": "0"
    },
    {
      "numid": 7,
      "iface": "MIXER",
      "name": "Auto Gain Control",
      "specs": {
        "type": "BOOLEAN",
        "rights": "rw------",
        "count": 1
      },
      "value": true,
      "originalValue": "on"
    },
    {
      "numid": 2,
      "iface": "PCM",
      "name": "Capture Channel Map",
      "specs": {
        "type": "INTEGER",
        "rights": "r----R--",
        "count": 1
      },
      "value": 2,
      "originalValue": "2"
    },
    {
      "numid": 1,
      "iface": "PCM",
      "name": "Playback Channel Map",
      "specs": {
        "type": "INTEGER",
        "rights": "r----R--",
        "count": 2
      },
      "value": [
        3,
        4
      ],
      "originalValue": "3,4"
    }
  ]
}
```
