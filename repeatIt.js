//  https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript
//  repeatIt
//  8 Kyu


var repeatIt = function(str, n) {
    return str.length > 0 ? str.repeat(n) : 'Not a string'
}