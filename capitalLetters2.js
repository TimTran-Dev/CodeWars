function capitalLetters(str) {
    const capitalArr = []
    for (let char of str.split(' ')) {
        capitalArr.push(char[0].toUpperCase() + char.slice(1).toLowerCase())
    }
    return capitalArr.join(' ')
}

console.log(capitalLetters('tHiS iS a tEst'));