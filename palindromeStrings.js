// Palindrome Strings
// https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript
// 8 Kyu

function isPalindrome(line) {
    return line.toLowerCase() === line.toLowerCase().split('').reverse().join('')
}