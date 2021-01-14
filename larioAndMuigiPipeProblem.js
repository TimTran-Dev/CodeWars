function pipeFix(numbers) {
    const arr = []
    const last = numbers[numbers.length - 1]
    for(let i = numbers[0]; i <= last; i++) {
        arr.push(i)
    }
    return arr
}