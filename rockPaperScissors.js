// Rock Paper Scissors!
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
// 8 Kyu

const rps = (p1, p2) => {
    if(p1 === p2) return 'Draw!'
    const rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'}
    if(p2 === rules[p1]) {
      return 'Player 1 won!'
    } else {
      return 'Player 2 won!'
    }
  };