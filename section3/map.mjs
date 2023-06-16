const products = [
    {name:'반팔티', price:15000},
    {name:'긴팔티', price:20000},
    {name:'핸드폰케이스', price:15000},
    {name:'후드티', price:30000},
    {name:'바지', price:25000},
]

let names = [];
for(const p of products) {
    names.push(p.name);
}
// console.log(names)

let prices = [];
for(const p of products) {
    names.push(p.price);
}

// console.log(prices)

//자바스크립트에서 사용하는 map 함수는 위 로직과 비슷합니다. 
//map 함수는 고차함수 입니다. 함수의 값을 이용하여 인자로 받아 내가 원하는 시점에서 활용합니다.
export const map = (f, iter) => {
    let res = [];
    for(const a of iter) {
        res.push(f(a));
    }

    return res;
} 

map(p => p.name , products)
