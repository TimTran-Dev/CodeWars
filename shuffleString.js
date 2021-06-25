// Shuffle String
// https://leetcode.com/problems/shuffle-string/
// Leetcode - Easy




//[c,o,d,e,l,e,e,t]
// []
//[4, 5, 6, 7, 0, 2, 1, 3]
// [l]
// don't want to push l to the first char
// 
var restoreString = function(s, indices) {
    const arr = []
    const strArr = s.split('')
    
    for (let i = 0; i < indices.length; i++) {
        arr[indices[i]] = s[i]
    }
    return arr.join('')
};




console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));