// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
// Name on billboard
// 8 Kyu

function billboard(name, price = 30) {
  return multiply(name.length * price);
}
function multiply(num, times) {
  let n = num;
  for (let i = 1; i < times; i++) {
    num += n;
  }
  return num;
}
