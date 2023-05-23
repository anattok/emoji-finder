const keys = [
  "hundred",
  "points",
  "symbol",
  "symbol",
  "wow",
  "wow",
  "win",
  "win",
  "perfect",
  "perfect",
];

const newArr = keys.filter((item, i, array) => array.indexOf(item) === i);

console.log(newArr);
