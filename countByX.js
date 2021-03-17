// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
// Count by X
// 8 Kyu

function countBy(x, n) {
    const countArr = []
    for (let i = x; i <= n * x; i += x) {
        countArr.push(i)
    }
    return countArr
}