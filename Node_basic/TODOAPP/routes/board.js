var router = require('express').Router(); // express 라이브러리의 Router를 쓰겠다

function 로그인했니(request ,response, next){ // 적용할 미들웨어
    if(request.user){ // 이사람이 로그인한 상대명 request.user가 달라붙어 있다
        next()
    }else{
        response.send('로그인이 안되어있습니다')
    }
}

// router.use(로그인했니); // 여기에 적는건 모든 URL에 적용되는 미들웨어.
// router.use('/shirts',  로그인했니); shirtes로 갈 때만 미들웨어 적용

// 각각 URL에 미들웨어를 적용하고자 하면 이렇게
router.get('/sports', 로그인했니, function(request, response){
    response.send('스포츠 게시판');
});
router.get('/game', 로그인했니, function(request, response){
    response.send('게임 게시판');
});

module.exports = router; // 나는 이 파일에서 router라는 변수를 배출하겠다.(모델에 실어 보내듯)