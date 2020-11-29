// Will there be enough?
// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
// 8 Kyu

function enough(cap, on, wait) {
    return on + wait > cap ? on + wait - cap : 0
  }