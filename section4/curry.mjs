// go + curry를 사용하여 더 읽기 좋은 코드로 만들기

//curry: 함수를 값으로 다루면서 받아둔 함수를 제가 원하는 시점에 평가시키는 함수. 우선 함수를 받아서 함수를 리턴하고, 
// 인자를 받아서 인자가 원하는 개수만큼 들어 왔을 때 받아둔 함수를 나중에 평가시키는 함수를 만들어 보겠습니다. 

// const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
//-> curry 함수가 실행할때, 인자로 함수를 받고, 함수를 리턴합니다. 이때 인자의 개수가 2개 이상이면 인자로 받은 함수가 즉시 실행하고, 아니라면, 다시 함수를 리턴합니다. 
// 리턴된 함수에 그다음 인자를 받고 리턴으로 함수를 실행합니다.

function curry(f) {
    return function(a,..._) {
        // console.log(a)
        // console.log('_:',b) // 빈배열
        if(_.length) {
            return f(a, ..._);
        }

        return function(..._) {
            console.log('what:',_)
            return  f(a, ..._);
        }
    }
}


//(f) => (a, ..._ ) => (..._) => f(a, ..._)

const mult = curry((a, b) => a * b);
console.log('mult1',mult(1)(2)) // 2

// const mult3 = mult(3);
// console.log(mult3)

// console.log(mult3(10)); //30
// console.log(mult3(5)); //15
// console.log(mult3(3)); //9 

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

export const currymap = curry((f, iter) => {
    let res = [];
    for(const a of iter) {
        res.push(f(a));
        
    }
    return res;
});

export const curryfilter = curry((f, iter) => {
    let res =[];
    for(const a of iter) {
      if(f(a)) res.push(a);
    }
    return res;
})

export const curryreduce = curry((f, acc, iter) => {

    if(!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }

    for(const iterItem of iter) {
        console.log(a)
        console.log(acc)
        acc = f(acc , iterItem) // f = (a :배열 초기값 -> 변경된 배열 값, f) => f(a)
    }
    return acc ;
});

export const currygo = (...args) => {
  return  curryreduce((a, f) => f(a), args)
}

console.log('not curring',currygo(
    products,
    products => curryfilter(p => p.price < 20000)(products), //해석을 해봅시다. products를 받아서, 
    products => currymap(p => p.price)(products),
    prices => curryreduce(add)(prices)
)) // 30000

console.log('curring',currygo(
    products,
    curryfilter(p => p.price < 20000),
    currymap(p => p.price),
    curryreduce(add)
)) // 30000
