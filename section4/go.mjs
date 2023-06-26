// go를 사용하여 읽기 좋은 코드로 만들기

import { map } from "../section3/map.mjs";
import { filter } from "../section3/filter.mjs";
import { go } from "./01.mjs";
import { reduce } from "./01.mjs";

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];

  const add =  (a, b) => a + b;
//   console.log(map(p => p.price, filter(p => p.price < 20000, products)));

console.log(go(
    products,
    products => filter(p => p.price < 20000, products),
    products => map(p => p.price, products),
    prices => reduce(add, prices )
)) // 30000

//