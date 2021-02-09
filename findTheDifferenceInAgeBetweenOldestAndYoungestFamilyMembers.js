// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
// 8 Kyu
// Find the Difference in Age between Oldest and Youngest Family Members


function differenceInAges(ages){
    const arr = ages.sort((a, b) => a - b)
    return [arr[0], arr[arr.length - 1], arr[arr.length - 1] - arr[0]]
}
