const person = { age: 10, name: 'Petr', adress: 'Moscow' };

for (const Key in person) {
    if(Key.length % 2 === 0) {
        console.log(Key)
    }
}