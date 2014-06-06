/*
 * bloom
 * https://github.com/chrisenytc/bloom
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    join = require('path').join,
    h = require('../lib/helpers.js'),
    assert = chai.assert;

var bloom = require('../lib/bloom.js');

before(function() {
    if (h.exists(__dirname + '/temp')) {
        h.rm(__dirname + '/temp');
        h.mkdir(__dirname + '/temp');
        h.write(__dirname + '/temp/.gitkeep', '');
    }
});

describe('bloom module', function() {

    describe('#encrypt()', function() {

        it('should create a new encrypted file', function() {

            bloom.encrypt(
                'bloom_winx_magix_gardenia1579535', 
                'winx_alfea_15795', 
                join(__dirname, 'fixtures', 'winx.mp4'),
                join(__dirname, 'temp', 'encrypted.mp4'));

            assert.isTrue(h.exists(__dirname, 'temp', 'encrypted.mp4'));

        });

    });

    describe('#decrypt()', function() {

        it('should decrypt a existing encrypted file', function() {

            bloom.decrypt(
                'bloom_winx_magix_gardenia1579535', 
                'winx_alfea_15795', 
                join(__dirname, 'temp', 'encrypted.mp4'),
                join(__dirname, 'temp', 'decrypted.mp4'));

            assert.isTrue(h.exists(__dirname, 'temp', 'decrypted.mp4'));

        });

    });

});
