function addAllNums(...rest) {
    return rest.reduce((a, b) => a + b)
}

console.log(addAllNums(1,2,3,4,5))