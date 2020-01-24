var express = require('express');
//var app = express();

var mijnArray = [];

for (let i = 0; i < 10; i++) {
  const next = Math.floor(Math.random() * 10 + 1);
  mijnArray.push(next);
}

let sum = 0;
mijnArray.forEach(n => (sum += n));

console.log('Sum = ' + sum);
