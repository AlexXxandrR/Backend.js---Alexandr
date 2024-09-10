const ObjectValues = (obj: { [key: string]: number }): number => {
  let sum = 0;

  for (const key in obj) {
    sum += obj[key];
  }

  return sum;
};

const data = {
  a: 10,
  b: 20,
  c: 5,
  d: 15,
};

console.log(ObjectValues(data));
