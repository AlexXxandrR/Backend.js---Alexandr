const sumObjectValues = (obj: Record<string, number>): number => {
  let sum = 0;
  Object.keys(obj).forEach((key) => {
    sum += obj[key];
  });
  return sum;
};

const obj = { a: 10, b: 20, c: 30 };
console.log(sumObjectValues(obj));
