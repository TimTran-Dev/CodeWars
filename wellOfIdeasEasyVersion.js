// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
// Well of Ideas - Easy Version
// 8 Kyu

function well(x) {
    let good = 0
    let bad = 0
    x.forEach((val, i) => {
        if (val === 'good') {
            good ++
        } else {
            bad ++
        }
    })
    if (good >= 3) {
        return 'I smell a series!'
    } 
    else if (good >= 1 && good <= 2) {
        return 'Publish!'
    }
    else if (good === 0) {
        return 'Fail!'
    }
}