let scores: number[] = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51,
];

console.log("array length", scores.length); // 35
// duplicate // 15
let highScore = Math.max.apply(null, scores); // 69

let output = scores.reduce((prev: number[], curr: number, index: number) => {
  return curr === highScore ? [...prev, index] : prev;
}, []);

let elements: Record<number, number> = {};
scores.forEach((item: number, index: number) => {
  // elements[item] = scores[item] || 0 + 1;
});

console.log(Object.keys(elements).length);
