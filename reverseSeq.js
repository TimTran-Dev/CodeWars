// Reversed Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = n => {
    const newArr = []
    for(let i = n; i > 0; i--) {
        newArr.push(i)
    }
    return newArr
};