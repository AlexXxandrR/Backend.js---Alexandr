const person = { age: 10, name: '', credit: 100 };
const common = [];

for (const key in person) {
    common.push(key);
}
console.log(common.join(', '));

