'use strict';

const filereader = require('./lib/reader.js');
let file  = `${__dirname}/data/file1.txt`;

let doSomething = (err, data) => {
  if (err) {
      throw err;
  }  
  console.log(data);
};

filereader(file, doSomething);