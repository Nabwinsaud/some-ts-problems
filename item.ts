let duplicate: Record<string, number> = {};
const items: readonly number[] = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51,
];
[...items].forEach((item: number) => {
  duplicate[item] = (duplicate[item] || 0) + 1;
});

// using reduce
const item: number[] = [...items].reduce((prev: number[], curr: number) => {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, []);
console.table(item); // same output
console.table(duplicate); // same output
