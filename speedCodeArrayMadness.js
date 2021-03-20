// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
// SpeedCode #2 - Array Madness
// 8 Kyu

function arrayMadness(a, b) {
    return a.reduce((a, b) => Math.pow(b, 2) + a, 0) > b.reduce((a, b) => Math.pow(b, 3) + a, 0)
}
