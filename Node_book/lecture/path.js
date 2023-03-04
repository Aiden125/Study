const path = require('path');

// 이렇게하면 경로 구분을 알아서 해줌 역슬래쉬, 더블슬래시 등 알아서
console.log(path.join(__dirname, '..', 'var.js')); 

console.log(path.resolve(__dirname, '..', '/var.js'));

// 중구난방인 경로를 제대로 만들어줌
console.log(path.normalize('C://users\\\\moon\\\path.js'));