// Character Frequency
// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2/train/javascript
// 8 Kyu

function charFreq(message) {
    const charMap = {}
    for(let char of message) {
      charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
  }