// // readonly in ts
// const fruits = ["apple", "banana", "grapes"] as const;
// // fruits.push("orange");
// console.log(fruits);

function addNumber(a: number, b: number) {
  return a + b;
}
console.log(addNumber(2, 2));

function add<T>(a: T, b: T) {
  if (typeof a == "string") {
    return parseInt(a, 10);
  }
}
