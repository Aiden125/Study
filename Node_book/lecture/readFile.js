/** 파일시스템이란걸 가져와서 이용 */
// promises를 하도 많이써서 붙이면 promises이용 가능
const fs = require('fs').promises;

/** 파일 읽기 */
fs.readFile('./readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((error) => {
        throw error;
    });

/** 
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});
*/