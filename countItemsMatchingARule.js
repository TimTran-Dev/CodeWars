// https://leetcode.com/problems/count-items-matching-a-rule/submissions/
// 1773. Count Items Matching a Rule
// Leetcodes - Easy



function countMatches(items, ruleKey, ruleValue) {
    let count = 0
    for (let i = 0; i < items.length; i++) {
        if (ruleKey === 'type') {
            if (ruleValue === items[i][0]) {
                count ++
            }
        }
        if (ruleKey === 'color') {
            if (ruleValue === items[i][1]) {
                count ++
            }
        }
        if (ruleKey === 'name') {
            if (ruleValue === items[i][2]) {
                count ++
            }
        }
    }
    return count
}

// console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"))
// console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone"))