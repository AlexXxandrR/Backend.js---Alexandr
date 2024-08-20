const arr = [0, 2, 3, 11, 21];
const middle = Math.floor(arr.length / 2);
const massive = [];

for (let i = middle; i < arr.length; i++) {
    massive.push(arr[i]);
}
console.log(massive);

