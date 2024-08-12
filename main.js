const person = {
    age: 10,
    name: 'Alex',
};
person.brother = 'Vlad';
person['brother - 2'] = 'Олег';
delete person.brother;
delete person['brother - 2']
console.log(person)
person.brotherTwo = {age: 7, name: 'Nickolas' };
console.log(person)
person.brotherTwo.adress = 'Sankt-Petrburg';
console.log(person)
person.brotherTwo.age = 11;
console.log(person)