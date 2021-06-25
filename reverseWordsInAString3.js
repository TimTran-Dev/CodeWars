// Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Leetcode = Easy

var reverseWords = function(s) {
    const revArr = s.split(' ')
    for (let i = 0; i < revArr.length; i++) {
        revArr[i] = revArr[i].split('').reverse().join('')
    }
    return revArr.join(' ')
};

console.log(reverseWords(`Let's take LeetCode contest`));