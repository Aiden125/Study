
// 서버를 express로 만들기위한 기본 문법
const express = require('express'); // 설치한 라이브러리 첨부해
const app = express(); // 새로운 객체 만들어
const bodyParser = require('body-parser');
const { response, request } = require('express');
app.use(bodyParser.urlencoded({extended : true}));
const MongoClient = require('mongodb').MongoClient;

// method-override를 위한 과정
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
//

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));



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
    response.render('index.ejs');
});

// 누가 write 접속했을 때 해당 파일을 보내주세요
app.get('/write', function(request, response){ 
    response.render('write.ejs');
});

// 어떤 사람이 /add 라는 경로로 post 요청을 하면
// 데이터 2개(날짜, 제목)를 보내주는데,
// 이 때 'post'라는 이름을 가진 collection에 두개 데이터 저장
// { 제목 : '어쩌구', 날짜 : '어쩌구 }
app.post('/add', function(request, response){
    response.send('전송완료');
    db.collection('counter').findOne({name : "게시물 글 갯수"}, function(error, result){
        console.log(result.totalPost)
        var totalPost = result.totalPost;
        
        db.collection('post').insertOne( { _id : totalPost + 1, 제목 : request.body.title, 날짜 : request.body.date} , function(에러, 결과){
            console.log('저장완료');

            // counter에 있는 totalPost +1 시키기
            // 콜백함수를 에러검증 용도로 쓰는 방법
            db.collection('counter').updateOne({name:'게시물 글 갯수'},{ $inc : {totalPost:1} },function(error, result){
                if(error) {return console.log(error)}
            });
        });

        
    });
});



// /list로 GET요청으로 접속하면
// 실제 DB에 저장된 데이터들로 꾸며진 HTML을 보여줘
// 누군가 list로 들어가면 렌더링을 해준다.
app.get('/list', function(request, response){
    // 디비에 저장된 post라는 collection안의 모든 데이터를 꺼내줘
    db.collection('post').find().toArray(function(error, result){
        console.log(result);
        
        // ejs에 posts라는 이름으로 정보들 보내기
        response.render('list.ejs', { posts : result});
    });
    
});


// 삭제 요청 응답하기
app.delete('/delete', function(request, response){
    console.log(request.body);
    // 파라미터로 날라온건 String이기에 int로 바꿔주자
    request.body._id = parseInt(request.body._id);
    
    // request.body에 담겨온 게시물 번호를 가진 글을 db에서 찾아서 삭제해줘
    db.collection('post').deleteOne(request.body, function(error, result){
        console.log('삭제완료');
        response.status(200).send({ message : '성공' }); // .send를 넣으면 메시지를 보내줌
    })
})


// 상세보기 요청 응답하기
// /detail/어쩌구 로 접속하면 detail.ejs를 보여줘(파라미터 넣기)
app.get('/detail/:id', function(request, response){
    // 요청 중 id라는 파라미터 잡아서 넣어줘
    db.collection('post').findOne({_id : parseInt(request.params.id)}, function(error, result){
        console.log(result);
        // detail에 data라는 이름으로 결과 보내줘
        response.render('detail.ejs', { data : result });
    })
})


// 수정페이지 get요청 응답하기
app.get('/edit/:id', function(request, response){
    db.collection('post').findOne({_id : parseInt(request.params.id)}, function(error, result){
        response.render('edit.ejs', { posts : result })
    })
})


// 수정페이지 put 요청 응답하기
app.put('/edit', function(request, response){
    // $set = 업데이트 해주세요 만약 없다면 추가해주세요
    // 폼에 담긴 제목 데이터, 날짜 데이터를 가지고
    // db.collection 에다가 업데이트 함
    db.collection('post').updateOne({_id : parseInt(request.body.id) },{ $set : { 제목 : request.body.title, 날짜 : request.body.date}},function(error, result){
        console.log('수정완료')
        response.redirect('/list')
    })
});

