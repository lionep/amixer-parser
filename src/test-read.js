const AmixerParser = require('./parser');

const amixer = new AmixerParser();

amixer.read()
  .then((values) => {
    console.log(JSON.stringify(values, undefined, 2));
  });
