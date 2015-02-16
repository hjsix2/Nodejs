/**
 * Created by hjsix2 on 2015. 2. 16..
 */
var assert = require('assert');
var github = require('../src/013_get_github_http');

describe('github', function() {
    it('should retrun timeline', function(done) {
        github(function(err, data) {
            assert.equal(data.length, 23);
            assert.equal(data[0].actor.login, 'hjsix2');
            done();
        });
    });
});