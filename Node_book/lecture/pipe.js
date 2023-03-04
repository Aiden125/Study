const fs = require('fs');
const zlib = require('zlib');

/** stream들 끼리 pipe를 만들어 읽으면서 쓸 수 있다. */
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark : 16});
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./writeme3.txt');
readStream.pipe(zlibStream).pipe(writeStream);