// https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
// Squash the bugs
// 8 Kyu



function findLongest(str) {
    return str.split(' ').sort((a, b) => b.length - a.length)[0].length
}