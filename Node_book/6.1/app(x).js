/** express를 활용해 http 서버를 만든다 */
const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);
/** path와 express를 활용한 html 서빙 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    res.send('heelo express');
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.listen(3000, () => {
    console.log('익스프레스 서버 실행');
});