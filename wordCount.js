// Word Count
// https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript
// 8 Kyu

function countWords(str) {
    return str.split(/\s/g).filter(Boolean).length
  }