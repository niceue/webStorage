@echo off

set SRC=src/localstorage.js
set MIN=dist/localstorage.js

uglifyjs %SRC% -o %MIN% -c -m --comments "/\/*!/"