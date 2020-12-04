// How good are you really?
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
// 8 Kyu



function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length
  }
  