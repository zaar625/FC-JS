// 기존과 달라진 ES6에서의 리스트 순회


// 기존 ES5 순회하는 방법
const list = [1, 2, 3];
for (var i = 0; i < list.length; i ++) {
    console.log(list[i])
}

// 변경된 ES6 순회 방법
for ( const a of list) {
    console.log(a)
}