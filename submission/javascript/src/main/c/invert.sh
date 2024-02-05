#!/bin/bash
# Invert index to create a mapping from terms to URLs containing that term
# The details of the index structure can be seen in the test cases

sort | uniq -c | awk -v url="$1" '{print substr($0, index($0,$2)) " | " $1 " | " url}'
