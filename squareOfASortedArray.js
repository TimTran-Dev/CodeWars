// Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Leetcode - Easy


var sortedSquares = function(nums) {
    const arr = []
    for (let i = 0; i < nums.length; i++) {
        arr.push(Math.pow(nums[i], 2))
    }
    return arr.sort((a, b) => a - b)
};