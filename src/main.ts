const arrays = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    let max = 1;

    for (let j = 1; j < num; j++) {
      if (num % j === 0) {
        max = j;
      }
    }

    console.log(`Наибольший делитель для ${num} - ${max}`);
  }
};
const numbers: number[] = [1, 10, 11, 12, 21, 61, 85, 123];
arrays(numbers);
