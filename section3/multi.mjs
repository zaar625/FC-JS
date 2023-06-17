//map + filter + reduce 중첩사용과 함수형 사고 

import { reduce } from "./reduce.mjs";
import { filter } from "./filter.mjs";
import { map } from "./map.mjs";

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];

  console.log(map(p => p.price, filter(p => p.price < 20000, products)));

  //만약 20000 만원 미만의 가격을 다 합치고 싶다면, 
  const add = (a , b) =>  a + b;

  //첫번째 방법.
  //두번째 인자는 숫자가 들어있는 배열이 들어와야합니다.
  console.log(reduce(add, map(p => p.price, filter(p => p.price < 20000, products))));

  //두번째 방법.
  console.log(reduce(add, filter( n => n >= 2000, map(p => p.price, products)))); 