#!/usr/bin/env node 

const JSONdb = require('simple-json-db');
const db = new JSONdb('./settings.json');

require('yargs')
  .scriptName("pirate-parser")
  .usage('$0 <cmd> [args]')
  .command('read [filename]', 'Read the file and get reading time', (yargs) => {
    yargs.positional('filename', {
        type: 'string',
        describe: 'The file/file path that you want to read'
      })
  }, function (argv) {
    const Estimator = require('./Estimator')
    let estimate = new Estimator();
    let numWords = estimate.extractWords(argv.filename);
    let wordsPerMinute = db.get('wordsPerMinute');
    let result = estimate.estimateReadingTime(numWords, wordsPerMinute);
    console.log("Estimated reading time : " + result + " minutes.");
  })
  .usage('$0 <cmd> [args]')
  .command('set [rate]', 'Set the number of words per minute to read', (yargs) => {
    yargs.positional('rate', {
        type: 'number',
        describe: 'Reading rate : Number of words per minute',
        default : 150
      })
  }, function (argv) {
   db.set('wordsPerMinute', argv.rate);
   console.log("Words per minute set to " + argv.rate);
  })
  .help()
  .argv