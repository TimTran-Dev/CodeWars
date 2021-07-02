// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// 557. Reverse Words in a String III
// Leetcodes -Easy


var reverseWords = function(s) {
    const revStr = s.split(' ')
    console.log(revStr)
    for (let i = 0; i < revStr.length; i++) {
        revStr[i] = revStr[i].split('').reverse().join('')
    }
    console.log(revStr)
    return revStr.join(' ')
};

console.log(reverseWords("God Ding"));