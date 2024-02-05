#!/bin/bash
#
# Combine terms to create  n-grams (for n=1,2,3) and then count and sort them
 
prev=""
prev_prev=""

while read -r current; do
    if [ -n "$prev" ]; then
        echo "$prev $current"
        if [ -n "$prev_prev" ]; then
        echo "$prev_prev $prev $current"
        fi
    fi
    echo "$current"
    prev_prev="$prev"
    prev="$current"
done