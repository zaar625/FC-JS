// go + curry를 사용하여 더 읽기 좋은 코드로 만들기

//curry: 함수를 값으로 다루면서 받아둔 함수를 제가 원하는 시점에 평가시키는 함수. 우선 함수를 받아서 함수를 리턴하고, 
// 인자를 받아서 인자가 원하는 개수만큼 들어 왔을 때 받아둔 함수를 나중에 평가시키는 함수를 만들어 보겠습니다. 

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);

console.log(mult(1)(2)) // 2

const mult3 = mult(3);

console.log(mult3(10)); //30
console.log(mult3(5)); //15
console.log(mult3(3)); //9