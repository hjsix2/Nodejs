/**
 * Created by hjsix2 on 2015. 2. 16..
 */
var assert = require('assert');
var nock = require('nock');
var github = require('../src/013_get_github_http');


var scope = nock('https://api.github.com')
    .log(console.log)
    .filteringPath(/\?.*/g, '')
    .get('/users/hjsix2/events')
    .reply(200, [
        { actor: {login: 'test_user'}},
        { actor: {login: 'hjsix2'}}
    ]);


describe('github', function () {
    before(function () {
        scope;
    });
    after(function () {
        // 롤백
        nock.restore();
    });

    it('should return timeline', function (done) {
        github(function (err, data) {
            assert.equal(data.length, 2);
            assert.equal(data[1].actor.login, 'hjsix2');
            done();
        });
    });
});