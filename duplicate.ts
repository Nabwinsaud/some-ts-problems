let scored: readonly number[] = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51,
];
let dup: number[] = [];
[...scored].reduce(
  (prevValue: number[], currValue: number, index: number, array: number[]) => {
    if (array.indexOf(currValue) !== index && prevValue.indexOf(index) < 0) {
      dup.push(currValue);
    }
    return prevValue;
  },
  []
);
// let duplicate: Record<number, number> = {};

// scored.forEach((i) => {
//   duplicate[i] = (duplicate[i] || 0) + 1;
//   console.log("item is", i);
// });

// console.log(duplicate);
// console.log(Object.keys(duplicate).length);

// console.log(dup.length);
