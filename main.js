const names1 = ['Ivan', 'Kovan', 0, 'D'];
const names2 = ['Kovan', 'NeIvan', 1, 0, 'C'];

const common = [];

for (const element of names1) {
    if(names2.includes(element)) {
        common.push(element);
    }
}
console.log(common);
