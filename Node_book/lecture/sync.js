/** fs는 동기를 지원하고 당연히
 * 순서대로 실행이 보장된다.
 */
const fs = require('fs');

let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());