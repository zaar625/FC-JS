log([...[1, 2], 3, 4, ...[5, 6], ...[7, 8, 9]]);

const isIterable = a => a && a[Symbol.iterator];

L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) for (const b of a) yield b
    else yield a;
  }
};

var it = L.flatten([[1, 2], 3, 4, [5, 6], [7, 8, 9]]);
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(take(6, L.flatten([[1, 2], 3, 4, [5, 6], [7, 8, 9]])));

// log(it.next());
// log(it.next());
// log(it.next());
// log(it.next());
const flatten = pipe(L.flatten, takeAll);
log(flatten([[1, 2], 3, 4, [5, 6], [7, 8, 9]]));

console.clear();