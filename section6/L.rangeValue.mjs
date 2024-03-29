/**
 * 이터러블 중심 프로그래밍에서의 지연 평가 (Lazy Evaluation)
 * 제때 계산법
 * 느긋한 계산법
 * 제너레이터/이터레이터 프로토콜을 기반으로 구현
 */

// L.map (지연성을 가진 map)
const Lmap = function *(f, iter) {
    for(const a of iter) yield f(a);
}

let it = Lmap(a => a + 10, [1, 2, 3]);

console.log(it.next()) //{ value: 11, done: false }
console.log([...it]) //[ 12, 13 ]

// L.filter(지연성을 가진 filter)

const Lfilter = function *(f, iter) {
    for(const a of iter) if(f(a)) yield a;
}

let filterIt = Lfilter(a => a % 2, [1, 2, 3, 4]);

console.log('filterIt:',filterIt.next())

// map, filter 계열 함수들이 가지는 결합 법칙
/**
 * 사용하는 데이터가 무엇이든지
 * 아용하는 보조 함수가 순수 함수라면 무엇이든지
 * 아래와 같이 결합한다면 둘 다 결과가 같다.
 */