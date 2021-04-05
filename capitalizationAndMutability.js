// https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript
// Capitalization and Mutability
// 8 Kyu

function capitalizeWord(word) {
  const update = word[0].toUpperCase() + word.substring(1);
  return update;
}
