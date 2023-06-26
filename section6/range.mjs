import { reduce } from "../section4/reduce.mjs";

const add =(a, b) => a + b;

const range = l => {
    let i = -1;
    let res = [];
    while (++i < l) {
        console.log('range:',i)
        res.push(i);
    }
    return res;
}

console.log(range(5)); // [0, 1, 2, 3, 4]

const list = range(3);

console.log("range",reduce(add , list));

//느긋한 L.range

const L = {};
L.range = function *(l) { 
    let i = -1;
    while (++i < l) {
        console.log('L.range:',i) //출력이 되지 않습니다. 
        yield i;
    }
}

const list2 = L.range(4); 
console.log('list2:',list2)// Object [Generator] {}
console.log('gen:',reduce(add, list2));

//console.log(list)의 경우 배열이 출력되고, console.log(list2) 를 출력해보면, L.range {<suspended>}

function test(name, time, f) {
    console.time(name);

    while(time-- ) f() 
    console.timeEnd(name);
    
}

test('range', 10, ()=>reduce(add, range(1000))); //489.075~ ms
test('range', 10, ()=>reduce(add, L.range(1000))); //295.78125 ms