// If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// 8 Kyu

var countSheep = function (num){
    let str = ''
    for(let i = 1; i <= num; i++) {
      str += i.toString() + ' ' + 'sheep...'
    }
    return str
  }