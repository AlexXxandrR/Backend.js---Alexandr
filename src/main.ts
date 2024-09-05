const split = (word: string) => {
  const letters: string[] = [];
  const digits: string[] = [];

  for (const char of word) {
    if (isNaN(Number(char))) {
      letters.push(char);
    } else {
      digits.push(char);
    }
  }

  return { letters, digits };
};

const result = split('abc123def456');
console.log(result); // { letters: ['a', 'b', 'c', 'd', 'e', 'f'], digits: ['1', '2', '3', '4', '5', '6'] }
