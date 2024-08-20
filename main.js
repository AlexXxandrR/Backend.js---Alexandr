const arr = [-10, -4, 0, 1, 4, 10, -3];
const res = [];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
        res.push(Math.abs(arr[i]));
    } else if(arr[i] > 0)  {
        res.push(arr[i] * 1.1);
    } else {
        res.push(arr[i]);
    }
}
console.log(res);