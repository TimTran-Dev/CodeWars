// Sum Arrays
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// 8 Kyu

function sum (numbers) {
    return numbers.length > 0 ? numbers.reduce((a, b) => a + b) : 0
};