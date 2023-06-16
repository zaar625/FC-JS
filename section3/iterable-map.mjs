import { map } from "./map.mjs";
// 이터러블 프로토콜을 따른 map의 다형성


/**
 * 아래처럼 map함수를 사용할 수 없습니다. querySelectorAll은 Array를 사용받지 않습니다.
 * querySelectorAll은 이터러블 프로토콜을 따르고 있기 때문입니다.
 */


// console.log(document.querySelectorAll('*').map(el => el.nodeName));

const it = document.querySelectorAll('*')[Symbol.iterator]();
console.log(it.next()) // {value: html, done: false}


function *gen() {
    yield 2;
    yield 3;
    yield 4;
}
console.log(map(a => a * a, gen())); //[ 4, 9, 16 ]

let m = new Map();
m.set('a', 10);
m.set('b', 20);

const it2 = m[Symbol.iterator]();
console.log(it2.next()); // {value: Array(2), done: false}
console.log(it2.next()); // {value: Array(2), done: false}
console.log(it2.next()); // {value: undefined, done: true}

map(([k, a])=> [k, a * 2], m); //[Array(2), Array(2)]