#!/usr/bin/env node 

const fs = require('fs');

class Estimator{

    constructor(){}

    extractWords(file_path){
        //console.log("extract words function");
        const data = fs.readFileSync(file_path, {encoding:'utf8', flag: 'r'});
        let words = data.split(' ');
        console.log("Number of words : " + words.length);
        return words.length;
    }

    estimateReadingTime(numberOfWords, wordsPerMinute){
        let dec = numberOfWords/wordsPerMinute;
        return Math.round(dec);
    }

}

module.exports = Estimator