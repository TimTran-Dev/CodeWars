function sumOfAllPrimeNums(num) {
    let sumOfPrime = 0
    function checkIfPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false
            }
        }
        return true
    }
    for (let i = 2; i <= num; i++) {
        if (checkIfPrime(i)) {
            sumOfPrime += i
        }
    }
    return sumOfPrime
}

console.log(sumOfAllPrimeNums(10))