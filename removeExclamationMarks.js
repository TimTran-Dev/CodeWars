// Remove exclamation marks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// 8 Kyu

function removeExclamationMarks(s) {
    return s.split(/!/g).join('')
  }