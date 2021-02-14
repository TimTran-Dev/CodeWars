// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
// What's the real floor?
// 8 Kyu


function getRealFloor(n) {
    if (n >= 13) {
        return n -2
    }
    else if (n > 0 && n < 13) {
        return n - 1
    } else {
        return n
    }
}