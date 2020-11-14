// Reversed Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
// 8 Kyu

const reverseSeq = n => {
    const arr = []
    for(let i = n; i > 0; i--) {
      arr.push(i)
    }
    return arr
  };