// queryStr 함수 만들기
const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => reduce((a, f) => f(a), args);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

var add = (a, b) => a + b;

const reduce = curry((f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    } else {
      iter = iter[Symbol.iterator]();
    }
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      acc = f(acc, a);
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
    Object.entries,
    map(([k,v]) => `${k}=${v}`),
    reduce((a, b)=> `${a}&${b}`)
)

//위 코드를 pipe를 이용하여 동일한 값을 가져올 수 있습니다. 

const queryStr2 = pipe(
    Object.entries,
    map(([k,v]) => `${k}=${v}`),
    reduce((a, b)=> `${a}&${b}`)
)

console.log(queryStr({limit: 10, offset: 10, type:'notice'}))
console.log(queryStr2({limit: 21, offset: 2, type:'admin'}))