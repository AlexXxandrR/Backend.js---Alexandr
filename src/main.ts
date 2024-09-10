const sayBuilder = (greeting: string) => (name: string) => `${greeting}, ${name}!`;

const sayHi = sayBuilder('Hi');
const sayBye = sayBuilder('Bye');

console.log(sayHi('Ruslan'));
console.log(sayBye('Ruslan'));
console.log(sayBye('Maxim'));
