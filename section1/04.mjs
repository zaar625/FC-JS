// 전개연산자도 마찬가지로 이터러블 이터레이터 프로토콜을 따릅니다.
const a = [1, 2];
console.log(...a)
console.log([...a, ...[3, 4]])

const set = new Set([1, 2, 3]);

console.log(...set)

const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

console.log(...map.keys())

// 만약 a[Symbol.iterator] = null 값을 할당 한다면, 로그는 Type error: a is not iterator 로 나타납니다.