// const path = require('path');
import { release, version } from 'os';
import path from 'path';
import { createServerHttp } from "http";
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
// require('./files/c');
import "./files/c";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

// module.exports = {
//     unknownObject,
//     createMyServer,
// };
export { unknownObject, createMyServer };

