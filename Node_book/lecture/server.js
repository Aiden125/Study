/** http 서버를 만들었고 server2.html 파일을 읽어와 제공해준다. */
const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
        const data = await fs.readFile('./server2.html');
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(200, { 'Content-Type' : 'text/plain; charset=utf-8' });
        res.end(err.message);
    }
})
    .listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
    console.error(error);
});