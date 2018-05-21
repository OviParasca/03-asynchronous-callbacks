'use strict';

const filereader = require('./lib/reader.js');

let doSomething = (err, data) => {
  if (err) {
      throw err;
  }  
  console.log(data);
};

filereader.readFiles([process.argv], doSomething);
