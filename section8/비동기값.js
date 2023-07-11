// 프로미스가 콜백과 다른 점은 비동기상황을 일급값으로 다룬다는 점에서 가장 큰 차이가 있습니다. 
//일급값: 대기, 진행중, 완료 -> 너무너무 중요합니다. 

// 콜백패턴으로 합성하기
function add10(a ,callback){
    setTimeout(()=> callback(a + 10) ,1000);
}


var a = add10(5, res => {
    add10(res, res => {
        console.log(res)
    })
})

//프로미스를 이용하여 위 코드와 동일하게 만들어 보기
// 프로미스 리턴을 반드시 작성해주어야합니다.
 function add20(a) {
    return new Promise(resolve => setTimeout(()=> resolve(a + 20), 100));
}

var b = add20(5).then(add20).then(console.log('hello')) 

// 아래와 같이 then() 실행 후 리턴 값은 promise입니다. 
var c = add20(30).then(a => a - 5);
console.log('add(30):',c) //Promise { <pending> }

console.log(a, b)// undefined Promise { <pending> }