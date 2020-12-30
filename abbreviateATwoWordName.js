// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// 8 Kyu

function abbrevName(name){
    const arr = []
    const initials = name.toUpperCase().split(' ')
    for(let i = 0; i < initials.length; i++) {
      arr.push(initials[i].slice(0, 1))
    }
    return arr.join('.')
  }