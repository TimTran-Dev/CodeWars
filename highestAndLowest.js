// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// Highest and Lowest
// 7 Kyu

function highAndLow(numbers){
    const numArr = numbers.split(' ').map(Number)
    const sorted = numArr.sort((a, b) => a - b)
    return String(sorted[sorted.length - 1] + ' ' + sorted[0])
  }