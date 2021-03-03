function sortByHeight(arr) {
    const positionArr = []
    const heightArr = []
    arr.forEach((val, i) => {
        val === -1 ? positionArr.push(i) : heightArr.push(val)
    })
    const sorted = heightArr.sort((a, b) => a - b)
    positionArr.forEach((val, i) => {
        sorted.splice(positionArr[i], 0, -1)
    })
    return sorted
}

console.log(sortByHeight([-1, 100, 50, 80, -1, -1, 20, 5]))