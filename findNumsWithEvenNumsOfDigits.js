// Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Leetcode - Easy

var findNumbers = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i].toString().split('')
        console.log(nums[i].length)
        if (nums[i].length % 2 === 0) {
            count ++
        }
    }
    return count
};

console.log(findNumbers([12,345,2,6,7896]));