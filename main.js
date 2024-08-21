const name1 = ['Ivan', 'Kovan'];
const name2 = ['Kovan', 'Ivan'];
let flag = true;

for (const string1 of name1) {
    if (!name2.includes(string1)) {
        flag = false;
        break;
    }
}
for (const string2 of name2) {
    if (!name1.includes(string2)) {
        flag = false;
        break;
    }
}
console.log(flag);