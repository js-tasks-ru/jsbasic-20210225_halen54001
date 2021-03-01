function factorial(n) {
  let step = 1;
  for (let i = 2; i <= n; i++) step = step * i;
  return step;
}
