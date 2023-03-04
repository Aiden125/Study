const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '입력하려고 하는 글')
    .then(() => {
      return fs.readFile('./writeme.txt');  
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });