#!/usr/bin/env node

// merge two files---the incoming 1-page index and the global index (on disk)
// the details of the global index can be seen in the test cases.

const fs = require('fs');
const {exit} = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

// TODO some code here
const map = new Map();

rl.on('line', (line) => {
  // TODO some code here
  const [key, count, url] = line.split(' | ');
  map.set(key, [[url, count]]);
});

rl.on('close', () => {
  mergeIndices();
  for(const [key, arr_new] of map){
    console.log(key + ' | ' + arr_new.map(a => a.join(' ')).join(' '));
  }

});

const mergeIndices = () => {
  // TODO some code here
  const global = process.argv[2];
  const file = fs.readFileSync(global, 'utf-8');
  const lines = file.split('\n');
  lines.forEach(line => {
    if(line){
    const [key, str] = line.split(' | ');
    const arr = str.split(' ');
    const arr_new = [];
    for(let i = 0; i < arr.length; i += 2){
      arr_new.push([arr[i], arr[i+1]]);
    }
    if(map.get(key)){
      arr_new.push(...map.get(key));
      arr_new.sort((a, b) => {
        return b[1]-a[1];
      });
    }
      map.set(key, arr_new);
  }
  });
}

