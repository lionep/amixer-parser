const AmixerParser = require('./parser');

const amixer = new AmixerParser();

amixer.read()
  .then((values) => {
    process.stdout.write(`${JSON.stringify(values, undefined, 2)}\n`);
  })
  .catch(err =>
    process.stderr.write('Not supported.\n')
  );
