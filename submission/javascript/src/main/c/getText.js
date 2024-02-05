#!/usr/bin/env node

// Extract text from a web page

const { convert } = require('html-to-text');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

// TODO Add some code

let text = '';

rl.on('line', (line) => {
  // Convert HTML to plain text and append to output
  text += line;
});

// When done reading input, print the output
rl.on('close', () => {
  const output = convert(text);
  console.log(output);
});

