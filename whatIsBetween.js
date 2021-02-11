// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
// 8 Kyu
// What is between?

function between(a, b) {
    const arr = []
    for(let i = a; i <= b; i++) {
        arr.push(i)
    }
    return arr
}