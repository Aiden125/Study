console.log(this); // 글로벌이 아님
console.log(this === module.exports)

function a() {
    // 이렇게 function안에 있어야 글로벌
    console.log(this === global);
}
a();