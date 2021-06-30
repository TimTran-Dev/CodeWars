function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair)
        steps(n, row + 1)
    }
    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    steps(n, row, stair)
}

console.log(steps(5, 0, ''))