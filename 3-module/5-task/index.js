function getMinMax(str) {
  let inputArray = str.split(/,| /);
  let onlyNumbers = inputArray.filter(Number);
  return { min: Math.min(...onlyNumbers), max: Math.max(...onlyNumbers) };
}
