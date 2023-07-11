/**
 * 자바스크립트에서 비동기 비동시성 프로그래밍을 하는 방법은 두가지입니다. 
 * callback 패턴, 프로미스를 기반으로 한 메서드 체이닝, async await를 사용하는 방법이 있습니다.
 **/

function add10(a ,callback){
    setTimeout(()=> callback(a + 10) ,1000);
}

add10(5, res => {
    console.log(res)
})

// 콜백패턴으로 합성하기
add10(res, res => {
    add10(res, res => {
        console.log(res)
    })
})

//프로미스를 이용하여 위 코드와 동일하게 만들어 보기
// 프로미스 리턴을 반드시 작성해주어야합니다.
function add20(a) {
    return new Promise(resolve => setTimeout(()=> resolve(a + 20), 100));
}

add20(5).then(add20).then(console.log('hello'))