// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// 8 Kyu

const squareSum = numbers => numbers.reduce((acc, num) => Math.pow(num, 2) + acc, 0)