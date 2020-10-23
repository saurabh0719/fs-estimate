#!/usr/bin/env node 

const fs = require('fs');

const wordsPerMinute = 150;

class Estimator{

    constructor(){}

    extractWords(file_path){
        const data = fs.readFileSync(file_path, {encoding:'utf8', flag: 'r'});
        let words = data.split(' ');
        return words.length;
    }

    estimateReadingTime(numberOfWords){
        let dec = numberOfWords/wordsPerMinute;
        return Math.round(dec);
    }

}

module.exports = Estimator