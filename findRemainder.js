function findRemainder(arr, target) {
    const sum = arr.reduce((a, b) => a + b)
    return sum >= target ? sum - target : target - sum
}

console.log(findRemainder([10, 20, 20, 30], 60));