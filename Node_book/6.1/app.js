/** express를 활용해 http 서버를 만든다 */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

// app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(cookieParser('moon'));
app.use(express.json()); // json data 받을 때
app.use(express.urlencoded({ extended: true })); // form data 받을 때. true면 qs, false면 querystring

/** 미들웨어 부분인데 app.use가 미들웨어가 아닌
 * req, res, next 들어가는 이 함수 자체가 미들웨어임
 */
// app.use((req, res, next) => {
//     console.log("1 모든 요청에 실행하고 싶어요");
//     next();
// }, (req, res, next) => {
//     try {
//         console.log('에러야');
//     } catch (error) {
//         // 이렇게 next에 error를 넣으면 에러처리로 바로 감
//         next(error);
//     }
// })
// , (req, res, next) => {
//     console.log("2 모든 요청에 실행하고 싶어요");
//     next();
// }, (req, res, next) => {
//     console.log("3 모든 요청에 실행하고 싶어요");
//     next();
// })


/** path와 express를 활용한 html 서빙
 *  한 라우터에서 send, json 등을 두 번 이상 하면 오류난다.
*/
app.get('/', (req, res) => {
    req.cookies
    req.signedCookies;
    res.cookie('name', encodeURIComponent(name), {
        expires: new Date(),
        httpOnly: true,
        path: '/',
    })
    res.clearCookie('name', encodeURIComponent(name), {
        httpOnly: true,
        path: '/',
    })
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.setHeader('Content-Type', 'text/html');
    // res.send('안녕'); // 이것들까지 쓰면 에러 발생
    // res.json({ hello: 'moon' });
});

app.post('/', (req, res) => {
    res.send('heelo express');
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

/** 404 처리 미들웨어인데
 * 404여도 200이라고 속일 수 있음
 * res.status(404)를 넣어주면 404로 보내주고
 * 200으로 설정하면 200으로 속여버림
*/
// app.use((req, res, next) => {
//     res.status(200).send('404입니다');
// })

// app.get('*', (req, res) => {
//     res.send('hello everybody');
// });

/** 에러 미들웨어는 매개변수가 무조건 4개여야 한다. */
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('에러가 발생했습니다');
})

app.listen(3000, () => {
    console.log('익스프레스 서버 실행');
});