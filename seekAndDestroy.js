function seekAndDestroy(arr) {
    const args = Array.from(arguments)
    function filterArray(arr) {
        return args.indexOf(arr) === -1
    }
    return arr.filter(filterArray)
}

console.log(seekAndDestroy([1,2,3,4,5], 3, 5))