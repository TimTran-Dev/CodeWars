const flattenedArrays = arrays => arrays.reduce((a, b) => a.concat(b))

console.log(flattenedArrays([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]))