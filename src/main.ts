const fruits = (arr: string[], maxLength: number): string[] => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < maxLength) {
      result.push(arr[i]);
    }
  }

  return result;
};

// Пример использования:
const strings = ['apple', 'banana', 'kiwi', 'plum'];
const maxLen = 5;
console.log(fruits(strings, maxLen));
