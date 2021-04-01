// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
// Sum without highest and lowest number
// 8 Kyu

function sumArray(array) {
  return array !== null && array.length > 2
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b)
    : 0;
}
