
// 서버를 express로 만들기위한 기본 문법
const express = require('express'); // 설치한 라이브러리 첨부해
const app = express(); // 새로운 객체 만들어
const bodyParser = require('body-parser');
const { response, request } = require('express');
app.use(bodyParser.urlencoded({extended : true}));
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb'); // objectId 쓰기위함

// socket.io 셋팅
const http = require('http').createServer(app);
const {Server} = require('socket.io');
const io = new Server(http);

require('dotenv').config() // 환경변수를 위한 라이브러리

// method-override를 위한 과정
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
//

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));



var db;
MongoClient.connect(process.env.DB_URL, { useUnifiedTopology: true }, function(에러, client){ // DB 커넥팅이 완료되면 서버 띄워
    if(에러) return console.log(에러) // 에러 뜨면 원인 콘솔에 띄우기

    db = client.db('todoapp'); // todoapp이라는 폴더(database)에 연결해

    // db.collection('post').insertOne( {이름 : 'john', _id : 20} , function(에러, 결과){
    //     console.log('저장완료');
    // });

    http.listen(8080, function(){
        console.log('listening on 8080')
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

//  검색
app.get('/search', (request, response) => {
    var 검색조건 = [
        {
            $search: {
                index: 'titleSearch',
                text: {
                    query: request.query.value,
                    path: "제목" // 여러개 원하면 ['제목', '날짜']
                }
            }
        },
        // score는 검색의 점수이고 이 순서대로 정렬해줌, 1로 입력한 값은 보여주고 0인 값은 안보여줌
        // { $project : { 제목 : 1, _id: 0, score : { $meta: "searchScore" } } }

        // { $sort : { _id : 1 } }, // 결과 정렬하기
        // { $limit : 10 } // 10개만 가져와
    ]
    console.log(request.query.value); // 요청 파라미터 잡아주는것 key를 잡아주는 거라고 생각하면 됨
    db.collection('post').aggregate(검색조건).toArray((error, result)=>{
        console.log(result)
        response.render('search.ejs', {posts : result} )
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


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

// app.use = 미들웨어를 쓰겠다
// 미들웨어 = 요청-응답 중간에 뭔가 실행되는 코드
app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());


// 로그인 페이지 라우팅
app.get('/login', function(request, response){
    response.render('login.ejs')
});

app.post('/login', passport.authenticate('local', { // 로컬인지 확인해줘
    failureRedirect : '/fail' // 인증 실패하면 여기로 이동해줘
}), function(request, response){ // 성공한 경우 실행
    response.redirect('/')
});


app.get('/mypage', 로그인했니, function(request, response){ // 로그인 했니라는 미들웨어 적용
    console.log(request.user);
    response.render('mypage.ejs', {사용자 : request.user}) // 성공하면 여기로 보내기
});

function 로그인했니(request ,response, next){ // 적용할 미들웨어
    if(request.user){ // 이사람이 로그인한 상대명 request.user가 달라붙어 있다
        next()
    }else{
        response.send('로그인이 안되어있습니다')
    }
}


// passport를 활용한 인증
// 인증방식을 Local Strategy 라고 칭함
// 아이디랑 비번을 입력하면 이를 정의
passport.use(new LocalStrategy({
    usernameField: 'id', // 아이디의 네임
    passwordField: 'pw', // 비번의 네임
    session: true, // 세션으로 저장할건지
    passReqToCallback: false,
  }, function (입력한아이디, 입력한비번, done) {
    //console.log(입력한아이디, 입력한비번);
    db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) { // 디비에 입력 데이터가 있는지 찾기
      if (에러) return done(에러) // 에러처리
  
      if (!결과) return done(null, false, { message: '존재하지않는 아이디요' }) // 디비에 아이디가 없는 경우
      if (입력한비번 == 결과.pw) { // 비번까지 맞는 경우
        return done(null, 결과)
      } else { // 비번이 틀린 경우
        return done(null, false, { message: '비번틀렸어요' })
      }
    })
  }));

  
  // 세션을 저장시키는 코드(로그인 성공시 발동)
  passport.serializeUser(function(user, done){
    done(null, user.id) // user.id라는 걸로 세션을 만든다
  });
  // 이 세션 데이터를 가진 사람을 DB에서 찾아줘(마이페이지 접속 시 발동)
  passport.deserializeUser(function(아이디, done){ // 여기서 아이디는 위의 user.id
    // 디비에서 위에있는 user.id로 유저를 찾은 뒤 유저정보를 아래에 뱉어 넣음
    db.collection('login').findOne({id : 아이디}, function(error, result){
        done(null, result)
    })
  });



// 가입하기
// 부가적으로 넣어야 할 기능 +중복검사+정규식+비번암호화
app.post('/register', function(request, response){
    db.collection('login').insertOne( { id : request.body.id, pw : request.body.pw }, function(error, result){
        response.redirect('/')
    })
})


app.post('/add', function(request, response){


    response.send('전송완료');
    db.collection('counter').findOne({name : "게시물 글 갯수"}, function(error, result){
        console.log(result.totalPost)
        var totalPost = result.totalPost;
        var 저장할거 = { _id : totalPost + 1, 작성자 : request.user._id, 제목 : request.body.title, 날짜 : request.body.date }
        
        db.collection('post').insertOne(저장할거, function(에러, 결과){
            console.log('저장완료');

            // counter에 있는 totalPost +1 시키기
            // 콜백함수를 에러검증 용도로 쓰는 방법
            db.collection('counter').updateOne({name:'게시물 글 갯수'},{ $inc : {totalPost:1} },function(error, result){
                if(error) {return console.log(error)}
            });
        });

        
    });
});


// 삭제 요청 응답하기
app.delete('/delete', function(request, response){
    console.log(request.body);
    // 파라미터로 날라온건 String이기에 int로 바꿔주자
    request.body._id = parseInt(request.body._id);
    
    var 삭제할데이터 = { _id : request.body._id, 작성자 : request.user._id }

    // request.body에 담겨온 게시물 번호를 가진 글을 db에서 찾아서 삭제해줘
    db.collection('post').deleteOne(삭제할데이터, function(error, result){
        console.log('삭제완료');
        if(error) {console.log(error)}
        response.status(200).send({ message : '성공' }); // .send를 넣으면 메시지를 보내줌
    })
})



// 미들웨어를 app.use 가 아닌 특정 요청과 응답 사이에 구겨넣는 것도 가능
// 슬래시shop 경로로 접속을 했을 때 이런 미들웨어를 적용하겠다(app.use)
// /shop으로 공통경로를 잡는 개념이라고 보면 됨
app.use('/shop', require('./routes/shop.js')); // ./가 현재 경로를 뜻함

app.use('/board/sub', require('./routes/board.js')); // ./가 현재 경로를 뜻함




// 파일 저장
let multer = require('multer');
var storage = multer.diskStorage({ // diskStorage = 같은 폴더에 저장해주세요
    destination : function(req, file, cb){
        cb(null, './public/image')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname) // 기본 파일로 저장해줘
    }
});

var upload = multer({storage : storage}); // 포스트 요청시 이걸 소환하면 multer가 알아서 함


// 파일 업로드 페이지
app.get('/upload', function(request, response){
    response.render('upload.ejs')
})

// 파일 업로드 요청
app.post('/upload', upload.single('profile'), function(request, response){
    response.send('업로드완료')
});

// 파일 여러개 업로드 요청
// app.post('/upload', upload.array('profile', 10), function(request, response){
//     response.send('업로드완료')
// });


// /image/music.jpg 라고 하면 music.jpg 보내줘야함
app.get('/image/:imageName', function(request, response){
    response.sendFile( __dirname + '/public/image/' + request.params.imageName ) // dirname = 현재 파일의 경로
})

// <img src="/image/music.jpg">


// 채팅시작하기
app.post('/chatroom', 로그인했니, function(request, response){
    var 저장할거 = { 
        title : "채팅방",
        member : [ObjectId(request.body.당한사람id), request.user._id], // 게시글에 저장된 id, session에 부여된 아이디 받기
        date : new Date()
    }
    
    db.collection('chatroom').insertOne(저장할거).then((result)=> {
        console.log('성공')
    })
})


// 내 채팅보기 페이지
app.get('/chat', 로그인했니, function(request, response){

    db.collection('chatroom').find({ member : request.user._id }).toArray().then((result)=>{ // Array안에 있어도 이렇게 찾기 가능 특정 멤버의 모든 자료를 꺼내줌
        response.render('chat.ejs', { data : result } )
    })
})

// 메시지 발행
app.post('/message', 로그인했니, function(request, response){
    
    var 저장할거 = {
        parent : request.body.parent,
        content : request.body.content,
        userid : request.user._id,
        date : new Date()
    }


    db.collection('message').insertOne(저장할거).then(()=>{
        console.log('성공')
        response.send('DB저장성공')
    })
});


// 채팅 구현하기
app.get('/message/:id', 로그인했니, function(request, response){
    
    response.writeHead(200, {
        "Connection": "keep-alive",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
    });

    db.collection('message').find({ parent : request.params.id }).toArray().then((result)=>{
        response.write('event: test\n'); // event 보낼데이터 이름
        // 서버 데이터는 문자로만 온다. 
        response.write('data: ' + JSON.stringify(result) + '\n\n'); // data 보낼데이터, {} 안에 담겨오기에 {}벗기기
    })


    // change Stream 설정 message 컬렉션을 감시해라
    const pipeline = [ // 유저가 요청한 것만 감시해라
        { $match: { 'fullDocument.parent' : request.params.id } }
    ];
    const collection = db.collection('message');
    const changeStream = collection.watch(pipeline);
    changeStream.on('change', (result)=>{
        console.log(result.fullDocument) // fullDocument == 변경된것만
        response.write('event: test\n'); // event 보낼데이터 이름
        response.write('data: ' + JSON.stringify([result.fullDocument]) + '\n\n');
    });


});



app.get('/socket', function(request, response){
    response.render('socket.ejs')
})

// 누가 웹소켓에 접속하면 내부 코드 실행해줘
io.on('connection', function(socket){
    console.log('유저 접속됨')
    
    // 채팅방 만들고 유저 넣기
    socket.on('room1-send', function(data){
        io.to('room1').emit('broadcast', data)
    });


    // 채팅방 만들고 유저 넣기
    socket.on('joinroom', function(data){
        socket.join('room1');
    });


    // 누가 user-send 이름으로 메시지 보내면 내부 코드 실행해
    socket.on('user-send', function(data){
        console.log('유저접속됨');
        
        // 서버가 유저에게 메시지 보내기
        // io.emit('broadcast', data) // 소켓에 참여한 모든 유저에게 보냄(단톡)
        // console.log(data);
        io.to(socket.id).emit('broadcast', data) // 서버 - 유저 1명간 단독 소통
    });

});


// 잘못된 페이지로 접근 했을 때 처리하기(최하단에 해야함)
app.get('*', function(request, response){
    response.render('index.ejs');
})
