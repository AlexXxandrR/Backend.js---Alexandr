const arr = [0, -2, 3, -11, 21];

let Positive = 0;
let Negative = 0;

for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] > 0) {
        Positive++;
    }else if (arr[i] < 0){
        Negative++;
    }
}
console.log(`Положительные числа: ${Positive}
Отрийательные числа: ${Negative}
`);

