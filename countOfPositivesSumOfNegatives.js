// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
// Count of positives / sum of negatives
// 8 Kyu



function countPositivesSumNegatives(input) {
    const positiveCount = []
    let negativeCount = 0
    if (input !== null && input.length > 0) {
        input.forEach((val, i) => {
            if (val > 0) {
                positiveCount.push(i)
            } else {
                negativeCount += val
            }
        })
    } else {
        return []
    }
    return [positiveCount.length, negativeCount]
}