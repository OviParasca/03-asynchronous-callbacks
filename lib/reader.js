'use strict';

const fs = require('fs');

module.exports = exports = (file, callback) => {
    console.log(file);
    console.log(callback);

    fs.readFile(file, (err, data) => {
        if (err) {
            callback(err);
        }
        return callback(undefined, data.toString().trim());
    });
};