function rangeOfSum(arr) {
    let sum = 0
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++ ) {
        sum += i
    }
    return sum
}

console.log(rangeOfSum([1,9]))