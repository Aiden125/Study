const fs = require('fs');
/** 16byte씩 쪼개서 스트림한다 */
/** 스트림은 버퍼에 비해 메모리가 덜 든다.
 *  200byte 짜리를 한번에 읽는게 아닌
 *  16byte 짜리를 여러번 읽어서 올 수 있기에
*/
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16});

const data = [];
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});
readStream.on('end', () => {
    console.log('end', Buffer.concat(data).toString());
});
readStream.on('error', (err) => {
    console.log('error:', err);
})