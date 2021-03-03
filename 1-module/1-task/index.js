function factorial(n) {
  let factorialResult = 1;
  for (let i = 2; i <= n; i++) {
    factorialResult = factorialResult * i;
  }
  return factorialResult;
}
