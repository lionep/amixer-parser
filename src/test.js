const AmixerParser = require('./parser');
const Promise = require('bluebird');
const glob = Promise.promisify(require('glob'));
const fs = require('fs');


Promise.promisifyAll(fs);

glob('./samples/*')
  .map((file) => fs.readFileAsync(file))
  .map((buffer) => buffer.toString())
  .map(AmixerParser.parse)
  .each((device) => {
    console.log(JSON.stringify(device, undefined, 2));
  });
