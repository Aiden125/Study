/** 큰 파일을 만들어보자 */
const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i=0; i<=10_000_000; i++) {
    file.write('안녕하세요 이건 엄청나게 큰 파일 입니다. 각오 단단히하세요\n');
}
file.end(); // 닫아주자