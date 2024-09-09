const fruits = (
  arr: string[],
  maxLength: number,
  comparison: 'less' | 'greater',
): string[] | number => {
  const result = [];

  for (const str of arr) {
    if (comparison === 'less' && str.length < maxLength) {
      result.push(str);
    } else if (comparison === 'greater' && str.length > maxLength) {
      result.push(str);
    }
  }

  return result;
};

const strings = ['apple', 'banana', 'kiwi', 'plum'];
const maxLen = 5;
console.log(fruits(strings, maxLen, 'greater'));
