const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log(buffer);
console.log(buffer.length); // 32byte
console.log(buffer.toString());

/** 띄엄띄엄 있는 버퍼를 합칠 수 있다. */
const array = [Buffer.from('띄엄'), Buffer.from('띄엄'), Buffer.from("띄어쓰기")];
console.log(Buffer.concat(array).toString());


/** 이렇게 아무 데이터 없는 5byte짜리 버퍼를 만드는것도 가능하다. */
console.log(Buffer.alloc(5));