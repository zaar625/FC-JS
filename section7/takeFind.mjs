const users = [
    {age: 32},
    {age: 31},
    {age: 37},
    {age: 28},
    {age: 25},
    {age: 32},
    {age: 31},
    {age: 37}
  ];

  const find = curry((f, iter) => go(
    iter,
    L.filter(f),
    take(1),
    ([a]) => a));

  log(find(u => u.age < 30)(users));

  go(users,
    L.map(u => u.age),
    find(n => n < 30),
    log);