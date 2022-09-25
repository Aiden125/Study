var router = require('express').Router(); // express 라이브러리의 Router를 쓰겠다

router.get('/shirts', function(request, response){
    response.send('셔츠 파는 페이지');
});
router.get('/pants', function(request, response){
    response.send('바지 파는 페이지');
});

module.exports = router; // 나는 이 파일에서 router라는 변수를 배출하겠다.(모델에 실어 보내듯)