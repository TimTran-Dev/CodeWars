// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
// Hello, Name or World!
// 8 Kyu

const parseName = (name) =>
  name
    ? `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`
    : "World";

const hello = (name) => `Hello, ${parseName(name)}!`;
