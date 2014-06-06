/*
 * bloom
 * https://github.com/chrisenytc/bloom
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/*
 * Module Dependencies
 */

var fs = require('fs');

/**
@class Helpers
 */

/*
 * Public Methods
 */

/**
 * Method responsible for check if path exists
 *
 * @example
 *
 *     fileService.exists('./bloom');
 *
 * @method exists
 * @public
 * @param {String} path File path of archive
 * @return {String} Returns true if file exists
 */

exports.exists = function exists(path) {
    return fs.existsSync(path);
};

/**
 * Method responsible for reading files and get content
 *
 * @example
 *
 *     fileService.read('./bloom');
 *
 * @method read
 * @public
 * @param {String} fillepath File path of archive
 * @param {String} encoding Encoding
 * @return {String} Returns file content
 */

exports.read = function readFile(filepath, encoding) {
    //Read and return this file content
    return fs.readFileSync(filepath, encoding);
};

/**
 * Method responsible for reading files as stream and get content
 *
 * @example
 *
 *     fileService.readStream('./bloom');
 *
 * @method readStream
 * @public
 * @param {String} fillepath File path of archive
 * @return {String} Returns file content
 */

exports.readStream = function readStream(filepath) {
    //Read and return this file content
    return fs.createReadStream(filepath);
};

/**
 * Method responsible for writing files
 *
 * @example
 *
 *     fileService.write('./bloom', 'string data');
 *
 * @method write
 * @public
 * @param {String} fillepath File path of archive
 * @param {String} data Data of file
 */

exports.write = function writeFile(filepath, data) {
    //Read and return this file content
    fs.writeFileSync(filepath, data);
};

/**
 * Method responsible for create folders
 *
 * @example
 *
 *     fileService.mkdir('./bloom');
 *
 * @method mkdir
 * @public
 * @param {String} path folder path
 */

exports.mkdir = function mkdir(path) {
    fs.mkdirSync(path);
};

/**
 * Method responsible for remove files
 *
 * @example
 *
 *     fileService.remove('./bloom');
 *
 * @method remove
 * @public
 * @param {String} path File path of archive
 */

exports.remove = function remove(path) {
    fs.unlinkSync(path);
};

/**
 * Method responsible for remove directories
 *
 * @example
 *
 *     fileService.rm('./bloom');
 *
 * @method rm
 * @public
 * @param {String} path File path of directory
 */

exports.rm = function rm(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file) {
            var curPath = path + '/' + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                exports.rm(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

/**
 * Method responsible for check if path is a file
 *
 * @example
 *
 *     fileService.isFile('./bloom');
 *
 * @method isFile
 * @public
 * @param {String} path File path of archive
 * @return {String} Returns true if path is file
 */

exports.isFile = function isFile(path) {
    var f = fs.stat(path);
    return f.isFile();
};

/**
 * Method responsible for check if path is a directory
 *
 * @example
 *
 *     fileService.isDir('./bloom');
 *
 * @method isDir
 * @public
 * @param {String} path File path of archive
 * @return {String} Returns true if path is directory
 */

exports.isDir = function isDir(path) {
    var f = fs.stat(path);
    return f.isDirectory();
};
