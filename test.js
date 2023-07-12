// queryStr 함수 만들기
const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => reduce((a, f) => f(a), args); //f((a, f) => f(a), args) : f는 curry 인자에 들어간 함수.

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

var add = (a, b) => a + b;

//f: (a, f) => f(a) 
const reduce = curry((f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    } else {
      iter = iter[Symbol.iterator]();
    }
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value; // a: 1. entries()  2. map함수 (..._) => f(a, ..._)  
      acc = f(acc, a); // f(acc, (..._) => f(a, ..._)) => map f([k,v])=> `${a}&${b}`, acc)

      //1. acc :Array(3)[Array(2), Array(2), Array(2)]
    }
    return acc;
  });

const map = curry((f, iter) => {
let res = [];
//start
iter = iter[Symbol.iterator]();
let cur;
while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(f(a));
}
// end
return res;
});




const queryStr = obj => go(
    obj,
    Object.entries,//f
    map(([k,v]) => `${k}=${v}`), //(..._) => f(([k,v]) => `${k}=${v}, ..._) //(..._) => f(a, ..._)
    reduce((a, b)=> `${a}&${b}`)//(..._) => f((a, b)=> `${a}&${b}`, ..._) //(..._) => f(a, ..._)
)

//위 코드를 pipe를 이용하여 동일한 값을 가져올 수 있습니다. 

// const queryStr2 = pipe(
//     Object.entries,
//     map(([k,v]) => `${k}=${v}`),
//     reduce((a, b)=> `${a}&${b}`)
// )

console.log(queryStr({limit: 10, offset: 10, type:'notice'}))
// console.log(queryStr2({limit: 21, offset: 2, type:'admin'}))