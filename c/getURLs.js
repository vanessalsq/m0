#!/usr/bin/env node

const readline = require('readline');
const {JSDOM} = require('jsdom');
const {URL} = require('url');

// Example usage:
const baseURL = process.argv[2] + '/';

// check for validity
let url;
try {
  url = new URL(baseURL).href;
} catch (err) {
  throw new Error('invalid url');
}

if (url.endsWith('html/')) {
  url = url.substring(0, url.lastIndexOf('/'));
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
    // console.log(a.href, '=====', baseURL);
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
