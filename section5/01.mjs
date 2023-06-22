// 총 수량, 총 가격
// 앞에 있는 커링함수를 이해해야 합니다.

import { reduce } from "../section4/01.mjs";

const products = [
    {name:'반팔티', price: 15000, quntity:1},
    {name:'긴팔티', price: 20000, quntity:2},
    {name:'핸드폰케이스', price: 15000, quntity:3},
    {name:'바지', price: 30000, quntity:4},
    {name:'바지', price: 25000, quntity:5},
];

const total_quantity = products => go(products, 
    map(p => p.quntity),
    reduce((a, b) => a + b));

// 위 코드를 pipe 함수로 변경 할 수 있습니다.
const total_quantity_widthpipe = pipe( 
    map(p => p.quntity),
    reduce((a, b) => a + b));

total_quantity(products) // 15
total_quantity_widthpipe(products) //15

const total_price = pipe(
    map(p => p.price * p.quntity),
    reduce((a, b) => a + b)
)

console.log(total_price) // 345000

// 위 수량 함수와 가격 함수를 보게되면 map을 제외하고 나머지 코드는 동일 합니다. 한단계 더 추상화가 가능합니다. 

const add = (a, b) => a + b; 

const sum = (f, iter) => go(
    iter,
    map(f),
    reduce((add))
)

console.log(sum(p => p.quantity, products)); // 15

const total_quantity_withSumFn = products => sum(p => p.quantity,products);
const total_price_withSumFn = products => sum(p => p.price * p.quantity, products);


//위 코드를 앞서 배운 커링함수를 이용하여 변경해봅시다. 

const sum_curry = curry((f, iter) => go(
    iter,
    map(f),
    reduce(add)
))

const total_quantity_curry = sum_curry(p => p.quantity);
const total_price_curry = sum_curry(p => p.price * p.quantity);


// 위에 만든 sum함수는 products만의 함수가 아닙니다. 예를 들어 아래 코드와 같이 유저의 나이가 있다고 가정했을 때, 동일하게 작동합니다. 이는 추상화 레벨이 높다고 표현합니다.

console.log(sum_curry(user => user.age), [
    {age:30},
    {age:10},
    {age:20},
]) //60