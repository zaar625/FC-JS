// Array, Set, Map을 통해 알아보는 이터러블/이터레이터 프로토콜
/**
 * Array, Set, Map 은 자바스크립트 내장 객체로써 이터러블 이터레이터 프로토콜을 따릅니다. 즉 for of 문으로 순회가 가능합니다. 
 * 이터러블/이터레이터 프로토콜
 * 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 메서드를 가진 값
 * 이터레이터: {value, done} 객체를 리턴하는 next() 를 가진 값
 * value의 값은 변수 a와 같습니다.
 * 이터러블/이터레이터 프로토콜: 이터러블을 for ...of, 전개 연산자 등과 함께 동작하도록한 규약
 */

// arr의 경우, key값을 이용하여 순회를 할 수 있습니다.즉, arr[0]의 값을 출력할 수 있습니다.
const arr = [1, 2, 3];
for (const a of arr) console.log('Arr',a);

//set을 출력 해보면, Set(3){1,2,3}으로 출력되는데요, 이는 set[0]을 출력할 수 없습니다. 이를 통해, for of문이 for문처럼 순회를 하지 않는다는 것을 알수 있습니다.
const set = new Set([1, 2, 3]);
for (const a of set) console.log('set:',a);

// map도 마찬가지입니다. 
/**
 * Map의 경우, map.keys();함수를 가집니다. 이 함수는 이터레이터를 리턴합니다.
 * MapIterator {"a", "b", "c"};
 * a.next();를 실행하면, {value : "a", done:false} 처럼 나오는테 키만 나타나게 됩니다. 원래는 ['a', 1]인데 말이죠.
 * 
 * map.keys(), map.value(), map.entries()
 * 
 * map의 경우 ['a', 1]안에는 또 심볼이터러블이 존재합니다. 이를 다시 순회하는 것이죠.
 */
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const a of map) console.log('map:',map);

// for of 문은 어떻게 추상화 되어 있을까요?
/**
 * Symbol.iterator는 ES6에 추가된 문법입니다.
 * Symbol.iterator은 어떤 객체의 키로 사용될 수 있습니다.
 * 만약 arr[Symbol.iterator] = null값으로 지정을 한다면, 
 * arr[Symbol.iterator] 를 출력하면 어떠한 함수를 뱉습니다.
 */