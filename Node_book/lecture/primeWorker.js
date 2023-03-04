const { Worker, isMainThread, parentPort, workerDate } = require("worker_thread");

const min = 2;
const max = 10_000_000;
const primes = [];

/** 미완성 페이지 */
function generatePrimes(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i = start; i<end; i++) {
        for (let j=min; j<Math.sqrt(end); j++) {
            if (i != j && i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

if (isMainThread) {
    const max = 10_000_000;
    const threadCount = 8;
    const range = Math.ceil((max - min) / threadCount);
    let start = min;
    console.time('prime');
    for (let i=0; i<threadCount; i++) {
        const wStart = start;
        threads.add(new Worker(__filename, { workerDate : { start: wStart, range}}));
        start += range;
    }
}


console.time('prime');
generatePrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);