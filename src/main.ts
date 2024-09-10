const ObjectValues = (obj: { [key: string]: any }): number => {
  let sum = 0;

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'number') {
      sum += value;
    }
  }

  return sum;
};

const data = {
  a: 10,
  b: 20,
  c: null,
  d: 15,
  e: 'string',
  f: true,
  g: undefined,
};

console.log(ObjectValues(data));
