let fileS = require('fs');
const { Console } = require('console');
let logOutput = 'node/outlog.txt';
let errOutpout = 'node/errlog.txt';
let output;
let error;

    output = fileS.createWriteStream(logOutput,{
        flags: 'a',
        encoding: 'utf8'
    });
    error = fileS.createWriteStream(errOutpout,{
        flags: 'a',
        encoding: 'utf8'
    });

module.exports = new Console(output, error);