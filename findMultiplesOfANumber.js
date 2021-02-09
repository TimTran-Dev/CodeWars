// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
// 8 Kyu
// Find Multiples of a Number

function findMultiples(integer, limit) {
    const arr = []
    for(let i = integer; i <= limit; i += integer) {
        arr.push(i)
    }    
    return arr
}
  