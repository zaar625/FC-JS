// go함수

/**
 * 함수형 프로그래밍에서는 코드를 값으로 만들어 다루는 아이디어를 많이 사용합니다. 
 * 코드를 값으로 다룰수 있기때문에 어떤 함수가 코드인 함수를 받아서 평가하는 시점을 원하는 데로 다룰 수 있기 때문에 코드의 표현력을 높일 수 있습니다. 
 */
import { reduce } from "../section3/reduce.mjs"


// 나머지 매개변수

const go = (...args) => reduce((a, f)=> f(a),args)
///111

console.log(go(
    0,
    a => a + 1,
    a => a + 10,
    a => a + 100,
))