// 함수 조합으로 함수 만들기
/**
 * 아래 코드를 보면, 중복된 코드가 보입니다. 중복된 코드를 줄여보겠습니다.
 * 고차함수들을 함수의 조합으로 만들어가면서 잘게 나뉘어진 함수들을 중복을 피할 수 있고 재사용성이 증가합니다.
 */

import { curryfilter } from "./04.mjs";
import { curryreduce } from "./04.mjs";
import { currygo } from "./04.mjs";
import { currymap } from "./04.mjs";

const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];

const add = (a, b) => a + b;
const pipe = (f, ...fs) => (...as) => {
  // console.log('as:',as);

  return go(f(...as), ...fs) // go(1, fn)
};

const total_price = pipe(
    currymap(p => p.price),
    curryreduce(add)
)

const base_total_price = predi => pipe(
    curryfilter(predi),
    total_price
)

  console.log(
    currygo(
        products,
        curryfilter(p => p.price < 20000),
        currymap(p => p.price),
        curryreduce(add)
    )
  )

  console.log(
    currygo(
        products,
        curryfilter(p => p.price >= 20000),
        currymap(p => p.price),
        curryreduce(add)
    )
  )
  //중복된 코드를 넣어보겠습니다. 
  console.log(
    currygo(
        products,
        curryfilter(p => p.price >= 20000),
        total_price
    )
  )
  
  //중복된 코드를 넣어 보겠습니다.
  console.log(
    currygo(
        products,
        base_total_price(p => p.price >= 20000),
    )
  )
  
  