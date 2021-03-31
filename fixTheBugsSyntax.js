// https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript
// Fix the Bugs(Syntax)-My First Kata
// 8 Kyu

function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}
