  // ## L.map + take로 map 만들기

  L.map = curry(function* (f, iter) {
    for (const a of iter) {
      yield f(a);
    }
  });

  const takeAll = take(Infinity);

  const map = curry(pipe(L.map, takeAll));

  log(map(a => a + 10, L.range(4)));

  // ## L.filter + take로 filter 만들기

  L.filter = curry(function* (f, iter) {
    for (const a of iter) {
      if (f(a)) yield a;
    }
  });

  const filter = curry(pipe(L.filter, takeAll));

  log(filter(a => a % 2, range(4)));
