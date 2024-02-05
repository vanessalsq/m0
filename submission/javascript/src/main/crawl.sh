#!/bin/bash

echo "$1" >>d/visited.txt

curl -sL "$1" |
  tee >(c/getURLs.js "$1" | grep -vxf d/visited.txt >>d/urls.txt) |
  c/getText.js
