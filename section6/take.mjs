import { range } from "./range.mjs";
import { L } from "./range.mjs";

const take = (l, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(a);

        if(res.length == l) return res;
    }

    return res;
}

console.log(range(100))

//두개의 의미가 다릅니다. 
console.time('')
console.log(take(5, range(100)));// 100개의 배열을 만든다음 5개를 출력하는 것이고,
console.timeEnd('')// 0.119ms

console.time('')
console.log(take(5, L.range(100))); //최대 100개의 값이 있고, 5개의 값만을 출력하는 것입니다. next()메서드를 이용하여,
console.timeEnd('')// 0.031ms

