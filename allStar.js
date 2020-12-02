// All Star Code Challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
// 8 Kyu

function strCount(str, letter){  
    return str.split('').filter((x) => x === letter).length
  }