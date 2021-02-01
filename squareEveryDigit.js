// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// Square Every Digit
// 7 Kyu

function squareDigits(num){
    const arr = []
    const numArr = num.toString().split('')
    for(let i = 0; i < numArr.length; i++) {
      numArr[i] = Math.pow(numArr[i], 2)
      arr.push(numArr[i])
    }
    return parseInt(numArr.join(''))
  }