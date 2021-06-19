// Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// Leetcode - Easy


function subtractProductAndSum(n) {
    let sum = 0
    
    const num = n.toString().split('').map(Number)
    let product = num.reduce((a, b) => a * b)
    
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    console.log(sum, product)
    return product - sum
}