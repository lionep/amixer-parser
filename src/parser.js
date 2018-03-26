const _ = require('lodash');
const Promise = require('bluebird');
const execAsync = Promise.promisify(require('child_process').exec);

module.exports = class AmixerParser {
  static parseGeneric(input) {
    const device = {};

    const deviceInfoRe = /^numid=([0-9]+),iface=([a-zA-Z0-9]+),name='([^']+)'(?:,device=([0-9]+))?(?:,index=([0-9]+))?$/;
    const inputParsed = input.match(deviceInfoRe);
    if (!inputParsed) {
      return device;
    }
    device.numid = parseInt(inputParsed[1], 10);
    device.iface = inputParsed[2];
    device.name = inputParsed[3];

    if (inputParsed[4]) {
      device.device = parseInt(inputParsed[4], 10);
    }
    if (inputParsed[5]) {
      device.device = parseInt(inputParsed[5], 10);
    }
    return device;
  }

  static parseType(input) {
    const device = {
      specs: {}
    };
    const deviceInfos = input.replace('; ', '').trim().split(',');

    for (let k = 0; k < deviceInfos.length; k++) {
      if (/^type=(.+)$/.test(deviceInfos[k])) {
        const val = deviceInfos[k].match(/^type=(.+)$/);
        device.specs.type = val[1];
      }
      if (/^access=(.+)$/.test(deviceInfos[k])) {
        const val = deviceInfos[k].match(/^access=(.+)$/);
        device.specs.rights = val[1];
      }
      if (/^values=(.+)$/.test(deviceInfos[k])) {
        const val = deviceInfos[k].match(/^values=(.+)$/);
        device.specs.count = parseInt(val[1], 10);
      }
    }
    return device;
  }

  static parseValue(value, type) {
    if (type === 'INTEGER') {
      return parseInt(value, 10);
    } else if (type === 'BOOLEAN') {
      return (value === 'on');
    } else if (type === 'BYTES') {
      return parseInt(value, 16);
    } else if (type === 'IEC958') {
      const values = value.replace('[', '').replace(']', '').split(' ');
      return {
        AES0: parseInt(values[0].split('=')[1], 16),
        AES1: parseInt(values[1].split('=')[1], 16),
        AES2: parseInt(values[2].split('=')[1], 16),
        AES3: parseInt(values[3].split('=')[1], 16)
      };
    }
    return null;
  }

  static parseValues(valueSpecs, input) {
    const device = {
      value: ''
    };
    const deviceValues = input.replace(': ', '').trim();

    if (/^values=(.+)$/.test(deviceValues)) {
      const val = deviceValues.match(/^values=(.+)$/);
      device.originalValue = val[1];
      if (valueSpecs.count > 1) {
        device.value = _.map(val[1].split(','), value => AmixerParser.parseValue(value.trim(), valueSpecs.type));
      } else {
        device.value = AmixerParser.parseValue(val[1].trim(), valueSpecs.type);
      }
    }
    return device;
  }

  static parse(input) {
    const blocks = input.split('numid=');
    const devices = blocks.map((block) => {
      const device = {};
      if (block === '') return false;
      const lines = block.split('\n');
      if (lines.length === 0) return false;

      // First line is device description
      if (lines[0]) {
        _.extend(device, AmixerParser.parseGeneric(`numid=${lines[0]}`));
      }

      for (let i = 1; i < lines.length; i++) {
        if (/^; type=/.test(lines[i].trim())) {
          _.extend(device, AmixerParser.parseType(lines[i]));
        }

        if (/^: values=/.test(lines[i].trim())) {
          _.extend(device, AmixerParser.parseValues(device.specs, lines[i]));
        }
      }

      return device;
    });
    return _.filter(devices);
  }

  static listCards() {
    return execAsync('aplay -l')
      .then((stdout) => {
        const lines = stdout.split('\n');
        return _.chain(lines)
          .filter(line => /^(card|carte|Karte) [0-9]+:/.test(line)) // http://git.alsa-project.org/?p=alsa-utils.git;a=tree;f=po
          .map(line => parseInt(line.split(':')[0].substring(5), 10))
          .value();
      })
      .then(cards => _.uniq(cards));
  }

  constructor() {
    this.cards = [];
  }

  parseCards() {
    return Promise.map(this.cards, cardId =>
      execAsync(`amixer -c ${cardId} contents`)
        .then(stdout =>
          [cardId, AmixerParser.parse(stdout)]
        )
      )
      .then((cards) => {
        const result = {};
        _.forEach(cards, (card) => {
          result[card[0]] = card[1];
        });
        return result;
      });
  }

  read() {
    return AmixerParser.listCards()
      .then((cards) => {
        this.cards = cards;
        return this.parseCards();
      });
  }
};
