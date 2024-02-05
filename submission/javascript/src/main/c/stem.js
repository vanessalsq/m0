#!/usr/bin/env node

// use Porter Stemmer to stem individual terms in a streaming fashion

var readline = require('readline');
var natural = require('natural');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let output = '';

rl.on('line', function (line) {
  // TODO some code
  const stem = natural.PorterStemmer.stem(line);
  console.log(stem);
});
