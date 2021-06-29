// function pyramid(n) {
//     const midPoints = Math.floor((2 * n - 1) / 2) // 4
//     for (let i = 0; i < n; i++) {
//         // 0
//         let level = ''
//         for (let j = 0; j < 2 * n - 1; j++) {
//             // 0 // 1 // 2 // 3 // 4 // 5 // 6// 7// 8 // 9
//             // 4 - 4 <= 9?            4 + 4 >= 9
//             // '    #     '
//             // '   ###    '
//             // '  #####   '
//             // ' #######  '
//             // '##########'
//             if (midPoints - i <= j && midPoints + i >= j) {
//                 level += '#'
//             } else {
//                 level += ' #'
//             }
//         }
//         console.log(level);
//     }
// }

function pyramid(num) {
    const midPoint = Math.floor((2 * num - 1) / 2)
    for (let i = 0; i < num; i++) {
        let level = ''
        for (let j = 0; j < (2 * num - 1); j++) {
            if (midPoint - i <= j && midPoint + i >= j) {
                level += '#'
            } else {
                level += ' '
            }
        };
        console.log(level)
    }
}




console.log(pyramid(5));