// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
// 8 Kyu

function digitize(n) {
    const revStr = n.toString().split('').map(Number).reverse()
    return revStr
  }