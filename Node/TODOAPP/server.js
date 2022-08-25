
// 서버를 express로 만들기위한 기본 문법
const express = require('express'); // 설치한 라이브러리 첨부해
const app = express(); // 새로운 객체 만들어
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
const MongoClient = require('mongodb').MongoClient;


var db;
MongoClient.connect('mongodb+srv://admin:user1234@cluster0.n6syaoe.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function(에러, client){ // DB 커넥팅이 완료되면 서버 띄워
    if(에러) return console.log(에러) // 에러 뜨면 원인 콘솔에 띄우기

    db = client.db('todoapp'); // todoapp이라는 폴더(database)에 연결해

    // db.collection('post').insertOne( {이름 : 'john', _id : 20} , function(에러, 결과){
    //     console.log('저장완료');
    // });

    app.listen(8081, function(){
        console.log('listening on 8081')
    }); // 서버를 열 수 있는데 어디로 열지(서버포트, 뭐할지)

});



// 누군가 /pet 으로 방문하면,
// pet관련 안내문을 띄워주자.

app.get('/pet', function(request, response){
    response.send('펫 용품 쇼핑할 수 있는 페이지입니다.')
});

app.get('/beauty', function(request, response){
    response.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.')
});

// 누가 홈으로 접속했을 때 해당 파일을 보내주세요
app.get('/', function(request, response){ 
    response.sendFile(__dirname + '/index.html')
});

// 누가 write 접속했을 때 해당 파일을 보내주세요
app.get('/write', function(request, response){ 
    response.sendFile(__dirname + '/write.html')
});

// 어떤 사람이 /add 경로로 POST 요청을 하면 ~~을 해주세요
app.post('/add', function(request, response){
    response.send('전송완료');
    console.log(request.body.date);
    console.log(request.body.title);
    db.collection('post').insertOne( {제목 : request.body.title, 날짜 : request.body.date} , function(에러, 결과){
        console.log('저장완료');
    });
});

// 어떤 사람이 /add 라는 경로로 post 요청을 하면
// 데이터 2개(날짜, 제목)를 보내주는데,
// 이 때 'post'라는 이름을 가진 collection에 두개 데이터 저장
// { 제목 : '어쩌구', 날짜 : '어쩌구 }





