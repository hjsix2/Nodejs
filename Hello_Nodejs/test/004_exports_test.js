/**
 * Created by hjsix2 on 2015. 2. 13..
 */
var call = require('../src/011_exports.js');
var assert = require('assert');

describe('Example', function(){
    describe('calculation', function(){
        it('call 011_exports.js', function(){
            console.log(call.area(4));
            var PI = Math.PI;
            assert.equal(PI * 4 * 4, call.area(4));
        });
    });
});