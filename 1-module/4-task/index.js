function checkSpam(str) {
  if (
    str.match(/1xbet/i) ||
    str.match(/xxx/i) ||
    str.match(/free xxxxx/i) ||
    str.match(/1XbeT now/i)
  ) {
    return true;
  } else return false;
}
