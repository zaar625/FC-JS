const delay100 = a => new Promise(resolve => setTimeout(() => resolve(a), 2000))

const go1 = (a, f) => f(a);
const add5 = a => a + 5;

var r = go1(10, add5) // 인자중 프로미스가 아닌 동기적으로 값을 바로 알아야 해당 함수가 작동됩니다.


// 그렇다면 인자중 프로미스가 들어 올 경우 위 코드처럼의 결과를 가져오려면 어떻게 해야할까요?

const go2 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
var r2 = go2(delay100(10), add5)

console.log('r1',r);
console.log('r2',r2)

//아래와 같이 중복된 코드를 리팩토링을 하면 동일한 코드를 사용할 수 있습니다.

const n1 = 10;
go2(go2(n1, add5),console.log('a'));

const n2 = delay100(10);
go2(go2(n2, add5), console.log('b'))

