const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

// 2번째로 실행 1.5초 뒤
const interval = setInterval(() => {
    console.log('1초 마다 실행');
}, 1000);

// 3번째로 실행
const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

// 1번째로 실행
const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다');
});

clearImmediate(immediate2);