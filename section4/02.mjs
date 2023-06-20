// pipe 함수 : 함수를 리턴하는 함수입니다.
import { go } from "./01.mjs";

// const pipe = (...fs) => (a) => go(a,...fs);

// const f = pipe(
//     a => a + 1,
//     a => a + 10,
//     a => a + 100,
// )

// console.log('pipe:',f(0)); //111


//------------------------------------------


const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const add = (a,b) => a + b;

go(
    add(0, 1),
    a => a + 10,
    a => a + 100,
)

const f = pipe(
    (a, b) => a + b,
    a => a + 10,
    a => a + 100,
)

console.log('사례2:',f(0, 1)); //111