// Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Leetcode = Easy

var reverseWords = function(s) {
    const revStr = s.split(' ')
    console.log(revStr)
    for (let i = 0; i < revStr.length; i++) {
        revStr[i] = revStr[i].split('').reverse().join('')
    }
    console.log(revStr)
    return revStr.join(' ')
};

console.log(reverseWords(`Let's take LeetCode contest`));