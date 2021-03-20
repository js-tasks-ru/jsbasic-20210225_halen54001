function getMinMax(str) {
  let inputArray = str.split(/,| /);
  let onlyNumbers = inputArray.filter(Number);
  let result = {
    min: Math.min(...onlyNumbers),
    max: Math.max(...onlyNumbers),
  };
  return result;
}
