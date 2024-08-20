const arr = [0, -2, 3, -11, 21];
let min = arr[0];
let max = arr[0];
let sum = 0;

for (const num of arr) {
    if(num < min) {
        min = num;
    }if(num > max) {
        max = num;
    }sum += num;

}
const res = sum / arr.length;
console.log(min);
console.log(max);
console.log(sum);