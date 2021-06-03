function addAllSums() {
    const args = Array.from(arguments)
    return args.reduce((a, b) => a + b)
}

console.log(addAllSums(3, 5, 10)); // --> 18