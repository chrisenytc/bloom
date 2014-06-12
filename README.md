# ![Bloom](https://raw.githubusercontent.com/chrisenytc/bloom/master/logo.png)

> A module wrapper to encrypt and decrypt files with aes-256-cbc

[![Build Status](https://secure.travis-ci.org/chrisenytc/bloom.png?branch=master)](http://travis-ci.org/chrisenytc/bloom) [![NPM version](https://badge-me.herokuapp.com/api/npm/bloomjs.png)](http://badges.enytc.com/for/npm/bloomjs)

## Getting Started
Install the module with: 

```bash
$ npm install -g bloomjs
```
Example:

```javascript
var bloom = require('bloomjs'),
    path = require('path').join;

bloom.encrypt(
            'bloom_winx_magix_gardenia1579535', 
            'winx_alfea_15795', 
            join(__dirname, 'fixtures', 'winx.mp4'),
            join(__dirname, 'temp', 'encrypted.mp4'));
```

## Documentation

#### .encrypt(password, iv, fileSource, fileOutput, callback)

**Parameter**: `password`
**Type**: `String`
**Example**: `bloom_winx_magix_gardenia1579535`

**Parameter**: `iv`
**Type**: `String`
**Example**: `winx_alfea_15795`

**Parameter**: `fileSource`
**Type**: `String`
**Example**: `./fixtures/winx.mp4`

**Parameter**: `fileOutput`
**Type**: `String`
**Example**: `./temp/encrypted.mp4`

**Parameter**: `callback`
**Type**: `Function`
**Example**: 
```javascript
function(data) {
    //actions
}
```

The 'encrypt' method is responsible for encrypt a file

How to use this method

```javascript
bloom.encrypt(
            'bloom_winx_magix_gardenia1579535', 
            'winx_alfea_15795', 
            join(__dirname, 'fixtures', 'winx.mp4'),
            join(__dirname, 'temp', 'encrypted.mp4'));
```

or with callback

```javascript
//If a function is passed in FileOutput, 
//no file will be generated and the encrypted data is sent to this function.

bloom.encrypt(
            'bloom_winx_magix_gardenia1579535', 
            'winx_alfea_15795', 
            join(__dirname, 'fixtures', 'winx.mp4'),
            function(data) {
                //actions
            });

bloom.encrypt(
            'bloom_winx_magix_gardenia1579535', 
            'winx_alfea_15795', 
            join(__dirname, 'fixtures', 'winx.mp4'),
            join(__dirname, 'temp', 'encrypted.mp4'), 
            function(data) {
                //actions
            });
```

#### .decrypt(password, iv, fileSource, fileOutput, callback)

**Parameter**: `password`
**Type**: `String`
**Example**: `bloom_winx_magix_gardenia1579535`

**Parameter**: `iv`
**Type**: `String`
**Example**: `winx_alfea_15795`

**Parameter**: `fileSource`
**Type**: `String`
**Example**: `./temp/encrypted.mp4`

**Parameter**: `fileOutput`
**Type**: `String`
**Example**: `./temp/decrypted.mp4`

**Parameter**: `callback`
**Type**: `Function`
**Example**: 
```javascript
function(data) {
    //actions
}
```

The 'decrypt' method is responsible for decrypt a file

How to use this method

```javascript
bloom.decrypt(
            'bloom_winx_magix_gardenia1579535', 
            'winx_alfea_15795', 
            join(__dirname, 'fixtures', 'encrypted.mp4'),
            join(__dirname, 'temp', 'decrypted.mp4'));
```

or with callback

```javascript
bloom.encrypt(
            'bloom_winx_magix_gardenia1579535', 
            'winx_alfea_15795', 
            join(__dirname, 'fixtures', 'encrypted.mp4'),
            join(__dirname, 'temp', 'decrypted.mp4'), 
            function(data) {
                //actions
            });
```

## How to use on CLI

#### Encrypt

```bash
$ bloom encrypt -s fixtures/winx.mp4 -o temp/encrypted.mp4 -p bloom_winx_magix_gardenia1579535 -i winx_alfea_15795
```

#### Decrypt

```bash
$ bloom decrypt -s temp/encrypted.mp4 -o temp/decrypted.mp4 -p bloom_winx_magix_gardenia1579535 -i winx_alfea_15795
```

## Contributing

Please submit all issues and pull requests to the [chrisenytc/bloom](http://github.com/chrisenytc/bloom) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/chrisenytc/bloom/issues).

## Screenshot

![Screenshot](https://raw.githubusercontent.com/chrisenytc/bloom/master/screenshot.png)

## License 

The MIT License

Copyright (c) 2014, Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

