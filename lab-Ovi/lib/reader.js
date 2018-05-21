// reader.js
'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readFiles = (paths, callback) => {
  // start at index 2, to ignore the node & index.js arguments in the process
  for (var i = 2; i < process.argv.length; i++) {
    fs.readFile(process.argv[i], 'utf8', function(err, data) {
      if (err) {
        callback(err);
      }
      return callback(undefined, data.toString().trim());
    });
  }
};