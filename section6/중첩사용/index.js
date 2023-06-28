const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => reduce((a, f) => f(a), args);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

var add = (a, b) => a + b;

const L = {};

const range = l => {
    let i = -1;
    let res = [];
    while (++i < l) {
      res.push(i);
    }
    return res;
  };

  const map = curry((f, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      res.push(f(a));
    }
    return res;
  });

  const filter = curry((f, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (f(a)) res.push(a);
    }
    return res;
  });

  const take = curry((l, iter) => {
    let res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  });

  const reduce = curry((f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    } else {
      iter = iter[Symbol.iterator]();
    }
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      acc = f(acc, a);
    }
    return acc;
  });

// console.time('');
  console.log(go(range(10),
    map(n => n + 10),
    filter(n => n % 2),
    take(10)));
// console.timeEnd('');