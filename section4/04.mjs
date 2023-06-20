// go + curry를 사용하여 더 읽기 좋은 코드로 만들기

//curry: 함수를 값으로 다루면서 받아둔 함수를 제가 원하는 시점에 평가시키는 함수. 우선 함수를 받아서 함수를 리턴하고, 
// 인자를 받아서 인자가 원하는 개수만큼 들어 왔을 때 받아둔 함수를 나중에 평가시키는 함수를 만들어 보겠습니다. 

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

//(f) => (a, ..._ ) => f(a, ..._) 
//(f) => (a, ..._ ) => (..._) => f(a, ..._)

const mult = curry((a, b) => a * b);

console.log(mult(1)(2)) // 2

const mult3 = mult(3);
console.log(mult3)

console.log(mult3(10)); //30
console.log(mult3(5)); //15
console.log(mult3(3)); //9 

//----------------------------------------
//03에서 사용한 로직을 변경해 봅시다.

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];

const add = (a, b) => a + b;

const map = curry((f, iter) => {
    let res = [];
    for(const a of iter) {
        res.push(f(a));
        
    }
    return res;
});

const filter = curry((f, iter) => {
    let res =[];
    for(const a of iter) {
      if(f(a)) res.push(a);
    }
    return res;
})

const reduce = curry((f, acc, iter) => {

    if(!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }

    for(const a of iter) {
        console.log(a)
        console.log(acc)
        acc = f(acc , a)
    }
    return acc ;
});

const go = (...args) => {
  return  reduce((a, f) => f(a), args)
}

console.log('not curring',go(
    products,
    products => filter(p => p.price < 20000)(products),
    products => map(p => p.price)(products),
    prices => reduce(add)(prices)
)) // 30000

console.log('curring',go(
    products,
    filter(p => p.price < 20000),
    map(p => p.price),
    reduce(add)
)) // 30000
