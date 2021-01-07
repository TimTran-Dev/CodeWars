// Remove the time
// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
// 8 Kyu

function shortenToDate(longDate) {
    return longDate.split(',').slice(0, 1).join('')
  }