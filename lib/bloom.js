/*
 * bloom
 * https://github.com/chrisenytc/bloom
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module Dependencies
 */

var crypto = require('crypto'),
    h = require('./helpers.js');

/**
@class Bloom
 */

/*
 * Public Methods
 */

/**
 * Method responsible for encrypt a file
 *
 * @example
 *
 *     bloom.encrypt('password32bits', 'iv16bits', 'path/to/source', 'path/to/output', function(data){});
 *
 * @method encrypt
 * @param {String} password Password is the raw password used by the algorithm
 * @param {String} iv Iv is an initialization vector
 * @param {String} fileSource File source path
 * @param {String} fileOutput File output
 * @param {Function} callback Callback with source
 * @public
 */

exports.encrypt = function(password, iv, fileSource, fileOutput, callback) {
    //Get file to encrypt
    var fileData = h.read(fileSource);
    //Create cipher
    var encryptedCipher = crypto.createCipheriv('aes-256-cbc', new Buffer(password), new Buffer(iv));
    //Encrypted data
    var encryptedData = Buffer.concat([
        encryptedCipher.update(fileData),
        encryptedCipher.final()
    ]);
    //Return
    if (typeof fileOutput === 'function') {
        callback = fileOutput;
        return callback(encryptedData);
    } else {
        h.write(fileOutput, encryptedData);
        if(typeof callback === 'function') {
            return callback(encryptedData);
        }
    }
};

/**
 * Method responsible for decrypt a file
 *
 * @example
 *
 *     bloom.decrypt('password32bits', 'iv16bits', 'path/to/source', 'path/to/output', function(data){});
 *
 * @method decrypt
 * @param {String} password Password secret
 * @param {String} iv Password secret
 * @param {String} fileSource File source path
 * @param {String} fileOutput File output
 * @param {Function} callback Callback with source
 * @public
 */

exports.decrypt = function(password, iv, fileSource, fileOutput, callback) {
    //Get encrypted file to decrypt
    var fileData = h.read(fileSource);
    //Create decipher
    var decryptedCipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(password), new Buffer(iv));
    //Decrypted data
    var decryptedData = Buffer.concat([
        decryptedCipher.update(fileData),
        decryptedCipher.final()
    ]);
    //Return
    if (typeof fileOutput === 'function') {
        callback = fileOutput;
        return callback(decryptedData);
    } else {
        h.write(fileOutput, decryptedData);
        if(typeof callback === 'function') {
            return callback(decryptedData);
        }
    }
};
