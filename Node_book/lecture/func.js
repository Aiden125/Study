/** 구조화를 통해서 각각 분배될 수 있게도 가능하다 */
const { odd, even } = require('./var') // require는 노드 내장함수

function checkOddOrEven(number){
    if(number % 2){
        return odd;
    }else{
        return EventTarget;
    }
}
modul.exports = checkOddOrEven;
 /** 여기서 만든걸 다시 또 모듈화해서 내보낼 수 있다 */