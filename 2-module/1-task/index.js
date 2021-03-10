function sumSalary(salaries) {
  let sum = 0;
  // не могу разобраться как добавить проверку salaries[key] == "number" на `NaN`, `Infinity`, `-Infinity`
  for (let key in salaries) {
    if (typeof salaries[key] == "number") {
      sum += salaries[key];
    }
  }
  return sum;
}
