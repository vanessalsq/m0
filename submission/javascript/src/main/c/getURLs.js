#!/usr/bin/env node

const readline = require('readline');
const { JSDOM } = require('jsdom');
const { URL } = require('url');

// Example usage:
const baseURL = process.argv[2];

// check for validity
let url;
try {
  url = new URL(baseURL);
} catch (err) {
  throw new Error('invalid url');
}

const rl = readline.createInterface({
  input: process.stdin,
});

// TODO some code
const res = new Set();

rl.on('line', (line) => {
  // TODO some code
  const dom = new JSDOM(line);
  const document = dom.window.document;

  document.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href) {
      const resolved = new URL(href, url).toString();
      res.add(resolved);
    }
  });
});

rl.on('close', () => {
  // TODO some code
  res.forEach((url) => console.log(url));
});
