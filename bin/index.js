#!/usr/bin/env node 

require('yargs')
  .scriptName("pirate-parser")
  .usage('$0 <cmd> [args]')
  .command('read [filename]', 'Read the file and get reading time', (yargs) => {
    yargs.positional('filename', {
        type: 'string',
        describe: 'The file/file path that you want to read'
      })
  }, function (argv) {
   // console.log("We are here")
    const Estimator = require('./Estimator')
    let estimate = new Estimator();
    let numWords = estimate.extractWords(argv.filename);
    let result = estimate.estimateReadingTime(numWords);
    console.log("Estimated reading time : " + result + " minutes.");
  })
  .help()
  .argv