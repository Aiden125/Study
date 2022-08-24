
// 서버를 express로 만들기위한 기본 문법
const express = require('express'); // 설치한 라이브러리 첨부해
const app = express(); // 새로운 객체 만들어

app.listen(8081, function(){
    console.log('listening on 8081')
}); // 서버를 열 수 있는데 어디로 열지(서버포트, 뭐할지)

// 누군가 /pet 으로 방문하면,
// pet관련 안내문을 띄워주자.

app.get('/pet', function(request, response){
    response.send('펫 용품 쇼핑할 수 있는 페이지입니다.')
});

app.get('/beauty', function(request, response){
    response.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.')
});