function gcd(x, y) {
  let result = Math.min(x, y);
  while (result > 0) {
    if (x % result == 0 && y % result == 0) {
      break
    }
    result--
  }
  return result
}
 
function simplify(x, y) {
  const g = gcd(x, y)
  return x / g, y / g
}