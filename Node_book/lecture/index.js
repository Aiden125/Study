const { odd, even } = require('./var'); /** 구조분해 할 때는 속성 명이 변수명과 같아야함 */
const checkNumber = require('./func');

function checkStringOddEven(str){
    if(str.length % 2){
        return odd;
    }else{
        return EventTarget;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddEven('hello'));