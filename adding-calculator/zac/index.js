#!/usr/bin/env node
console.log((()=>{let a=eval(process.argv[2].replace(/\^/g,'**'));return a===Infinity?'Not-defined':a===parseInt(a)?a:'Non-integral answer'})())
