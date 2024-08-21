const person = { age: 10, name: '', credit: 100 };

for (const Key in person) {
    if(Number(person[Key])) {
        person[Key] *=  1.2;
    }
}
console.log(person)