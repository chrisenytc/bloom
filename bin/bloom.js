#!/usr/bin/env node

/*
 * bloom
 * https://github.com/chrisenytc/bloom
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

 'use strict';

/**
 * Module dependencies
 */

var program = require('commander'),
    updateNotifier = require('update-notifier'),
    Bloom = require('../lib/bloom.js'),
    banner = require('../lib/banner.js'),
    pkg = require('../package.json');

/*
 * Bloom Bootstrap
 */

program
    .version(pkg.version, '-v, --version')
    .usage('command [option]'.white);

program
    .option('-s, --source <source>', 'A path of file to encrypt');

program
    .option('-o, --output <output>', 'A output file to write encrypted data');

program
    .option('-p, --password <password>', 'The raw password used by the algorithm 32bits');

program
    .option('-i, --iv <iv>', 'A initialization vector 16 bits');

/*
 * Bloom Encrypt
 */

program
    .command('encrypt')
    .description('Encrypt a file'.white)
    .action(function() {
        if(program.source && program.output && program.password && program.iv) {
            console.log('Encrypting...');
            Bloom.encrypt(program.password, program.iv, program.source, program.output);
            console.log('Done, Encrypted to ' + program.output);
        } else {
            console.log('Required options: -src, -o, -p and -i');
        }
    });

/*
 * Bloom Decrypt
 */

program
    .command('decrypt')
    .description('Decrypt a file'.white)
    .action(function() {
        if(program.source && program.output && program.password && program.iv) {
            console.log('Decrypting...');
            Bloom.decrypt(program.password, program.iv, program.source, program.output);
            console.log('Done, Decrypted to ' + program.output);
        } else {
            console.log('Required options: -src, -o, -p and -i');
        }
    });

/*
 * Bloom on help option show examples
 */

program.on('--help', function() {
    console.log('  Examples:');
    console.log('');
    console.log('    $ bloom encrypt');
    console.log('    $ bloom decrypt');
    console.log('');
});

if (process.argv.length === 3 && process.argv[2] === '--help') {
    banner();
}

/*
 * Bloom Process Parser
 */

program.parse(process.argv);

/*
 * Bloom Default Action
 */

var notifier = updateNotifier({
    packageName: pkg.name,
    packageVersion: pkg.version
});

if (notifier.update) {
    notifier.notify(true);
}

if (process.argv.length === 2) {
    banner();
    program.help();
}
