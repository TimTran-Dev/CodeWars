// https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
// How old will I be in 2099?
// 8 Kyu

function calculateAge(a, b) {
  // enter your code here.
  return a - b === 1
    ? `You will be born in 1 year.`
    : a > b
    ? `You will be born in ${a - b} years.`
    : a - b === 1 || b - a === 1
    ? `You are 1 year old.`
    : b > a
    ? `You are ${b - a} years old.`
    : a === b
    ? `You were born this very year!`
    : 0;
}
