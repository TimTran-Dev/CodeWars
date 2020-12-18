// Find numbers which are divisible by given number
// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
// 8 Kyu

function divisibleBy(numbers, divisor){
    const arr = []
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] % divisor === 0) {
        arr.push(numbers[i])
      }
    }
    return arr
  }