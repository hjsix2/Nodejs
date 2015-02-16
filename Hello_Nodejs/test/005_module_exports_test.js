/**
 * Created by hjsix2 on 2015. 2. 13..
 */
var call = require('../src/012_module_exports.js');
var assert = require('assert');

describe('Example', function(){
    describe('calculation', function(){
        it('call 012_module_exports.js', function(){
            var myCall = call(4);
            console.log(myCall.area(4));
            assert.equal(4 * 4, myCall.area(4));
        });
    });
});