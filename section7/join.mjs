// 자바스크립트에서 제고항하는 Array.join은 배열인 상태에서만 사용가능합니다.
// 아래 코드와 같이 확장성있는 join 함수를 만들어 봅시다.(배열이 아니더라도)

const join = curry((sep = ',', iter)=> reduce((a, b)=> `${a}&${sep}&${b}`,iter))

const queryStr2 = pipe(
    Object.entries,
    map(([k,v]) => `${k}=${v}`),
    join('&')
)

// 예를 들면,

function *a(){
    yield 10;
    yield 11;
    yield 12;
    yield 13;
}

// console.log(a().join(','))를 사용할 수 없습니다.
console.log(join(' - ', a()))