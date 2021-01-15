function sumOfDifferences(arr) {
    return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0
}