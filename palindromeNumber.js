// Given an integer x, return true if x is palindrome integer.
// https://leetcode.com/problems/palindrome-number/
// leetcode - Easy

var isPalindrome = function(x) {
    return x === Number(x.toString().split('').reverse().join(''))
};

console.log(isPalindrome(121))