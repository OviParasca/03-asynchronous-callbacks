'use strict';

jest.mock('fs');

const reader = require('../../lib/reader.js');

process.argv.push('data/file1.txt');
process.argv.push('data/file2.txt');
process.argv.push('data/file3.txt');

describe("File Reader Module", () => {

    it('when given a bad file, returns an error', () => {
        reader.readFiles(process.argv[0],  (err, data) => {
            expect(err).toBeDefined();
        });
    });

    it('when given real files, it returns the contents', () => {
        reader.readFiles([process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]],  (err, data) => {
            expect(err).toBeUndefined();
            expect(typeof data).toBe("string");
        });
    });

});