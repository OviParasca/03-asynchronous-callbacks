'use strict';

jest.mock('fs');

const reader = require('../../lib/reader.js');

describe("File Reader Module", () => {

    it('when given a bad file, returns an error', () => {
        let file = `${__dirname}/../../data/bad.txt`;
        reader(file, (err, data) => {
            expect(err).toBeDefined();
        });
    });

    it('when given a real file, it returns the contents', () => {
        let file = `${__dirname}/../../data/file1.txt`;
        reader(file, (err, data) => {
            expect(err).toBeUndefined();
            expect(typeof data).toBe("string");
        });
    });

});