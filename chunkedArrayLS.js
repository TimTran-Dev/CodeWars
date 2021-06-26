function chunk(array, size) {
    // chunked will store the sub arrays inside of an array
    const chunked = []
    // looping through each element in the array
    for (let element of array) {
        // storing the last element in the chunked array in a variable
        const last = chunked[chunked.length - 1]
        // checking if last exists AKA if its falsey, or if the length of the last array is equal to size
        if (!last || last.length === size) {
            // push the element into a subarray if the conditionals apply
            chunked.push([element])
        } else {
            // push another element to the last sub array until the length of sub array is equal to the size
            last.push(element)
        }
    }
    // finally returning the chunked array with multiple sub arrays
    return chunked
}