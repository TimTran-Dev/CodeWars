const charFreq = message => {
    const charMap = {}
    for(let char of message){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

function maxChar(str){
    let maxChar = ''
    let maxNum = 0
    const charMap = charFreq(str)
    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}