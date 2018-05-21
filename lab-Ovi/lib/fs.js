'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
    console.log("MOCKED!");

    if (file.match(/bad/i)) {
        cb('Invalid File');
    } else {
        cb(undefined, new Buffer('File Contents'));
    }
};