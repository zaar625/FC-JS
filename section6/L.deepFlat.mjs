// L.deepFlat

// 만일 깊은 Iterable을 모두 펼치고 싶다면 아래와 같이 `L.deepFlat`을 구현하여 사용할 수 있습니다. `L.deepFlat`은 깊은 Iterable을 펼쳐줍니다.
L.deepFlat = function* f(iter) {
    for (const a of iter) {
      if (isIterable(a)) yield* f(a);
      else yield a;
    }
  };
  log([...L.deepFlat([1, [2, [3, 4], [[5]]]])]);
  // [1, 2, 3, 4, 5];

  // log([[1, 2], [3, 4], [5, 6, 7]].flatMap(a => a));
  // log([[1, 2], [3, 4], [5, 6, 7]].flatMap(a => a.map(a => a * a)));
  // log(flatten([[1, 2], [3, 4], [5, 6, 7]].map(a => a.map(a => a * a))));
  // log(flatten([[1, 2], [3, 4], [5, 6, 7]].map(a => a.map(a => a * a))));

  L.flatMap = curry(pipe(L.map, L.flatten));
  const flatMap = curry(pipe(L.map, flatten));

  // var it = L.flatMap(map(a => a * a), [[1, 2], [3, 4], [5, 6, 7]]);
  var it = L.flatMap(a => a, [[1, 2], [3, 4], [5, 6, 7]]);
  log([...it]);
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());
  log(flatMap(a => a, [[1, 2], [3, 4], [5, 6, 7]]));

  log(flatMap(L.range, map(a => a + 1, [1, 2, 3])));

  var it = L.flatMap(L.range, map(a => a + 1, [1, 2, 3]));
  log(it.next());
  log(it.next());
  log(it.next());
  log(it.next());

  log(take(3, L.flatMap(L.range, map(a => a + 1, [1, 2, 3]))));
  