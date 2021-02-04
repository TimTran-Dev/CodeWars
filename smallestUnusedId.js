// https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript
// Smallest unused ID
// 8 Kyu

function nextId(ids) {
    const newIds = new Set(ids)
    for(let i = 0; i <= ids.length; i++) {
        if(!newIds.has(i)){
            return i
        }
    }
    return null
}