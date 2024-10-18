const countTypes = (...args: any[]): Record<string, number> => {
  return args.reduce((acc, arg) => {
    let type;

    if (arg === null) {
      type = 'null';
    } else {
      type = typeof arg;
    }

    if (acc[type]) {
      acc[type] += 1;
    } else {
      acc[type] = 1;
    }

    return acc;
  }, {});
};

const func = () => {};

console.log(
  countTypes(3, true, 'a', 1, {}, func, 4, [], undefined, false, 0, undefined, func, {}, ''),
);
