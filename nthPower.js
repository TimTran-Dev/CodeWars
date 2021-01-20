function index(array, n) {
    const position = array[n]
    return array.length > n ? Math.pow(position, n) : -1
}