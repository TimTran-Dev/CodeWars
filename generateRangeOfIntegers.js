// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
// 8 Kyu
// Generate range of integers


function generateRange(min, max, step) {
    const arr = []
    for(let i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
}