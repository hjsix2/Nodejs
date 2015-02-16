/**
 * Created by hjsix2 on 2015. 2. 13..
 */
var assert = require('assert'), fs = require('fs');

describe('Example', function () {
    describe('calculation', function () {
        it('1+1 should be 2', function (done) {
            fs.readFile('001_mocha_bdd.js', function (error, data) {
                done();
            });
        });
    });
});