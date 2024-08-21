const person = { age: 10, name: 'Petr', adress: 'Moscow' };
const massive1 = [];
const massive2 = [];

for (const key in person) {
    massive1.push(key);
    massive2.push(person[key]);
}
console.log(massive1);
console.log(massive2);