// 사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의
const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next(){
                return i == 0 ? {done:true} : {value: i--, done:false}
            },
            // 자기 자신 또한 리터러블이면서, 자기자신을 리턴해야합니다.
            [Symbol.iterator]() {
                return this;
            }
        }
    }
}

let iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//a 에 value 값을 담게 됩니다.
for (const a of iterable) console.log('iterable:',a );

const arr2 = [1, 2, 3];
let iter2 = arr2[Symbol.iterator]();
// iter2 역시 Symbol.iterator을 가지고 있습니다.
console.log(iter2)
console.log('have',iter2[Symbol.iterator])
//이터레이터를 실행한 값은 자기 자신입니다. = 웰폼드 이터레이터
console.log('self',iter2[Symbol.iterator]() === iter2)
for (const a of iter2) console.log('iter2:',a);
/**
 * 만약 iter2.next(); 를 사용한다면, 그 이후의 값이 출력됩니다. 2, 3 
 * 이와 같이 잘 만들어진 이터레이터는 next() 사용 이후부터 값을 출력 할 수도 있습니다. 
 */


for (const a of document.querySelectorAll('*')) console.log(a);
const all = document.querySelectorAll('*');
let iter3 = all[Symbol.iterator];
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());