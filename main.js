const arr = [1.1 , 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2];
const res = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        count++;
    if(count > 3) {
        res.push(Math.round(arr[i]));

    }else {
     res.push(arr[i]);
    }
    }else {
        res.push(arr[i]);
    }
}
console.log(res);