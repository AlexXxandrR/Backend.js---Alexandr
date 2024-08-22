const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

let countvowels = 0;
let countnovowels = 0;

for (const char of vowels) {
    if(vowels.includes(char)) {
        countvowels++;
    }else {
        countnovowels++;
    }
}

console.log(countvowels);
console.log(countnovowels);