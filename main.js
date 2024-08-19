for (let i = 0; i <= 1000; i++) {
    let lastDigit = i % 10;
    let firstDigit = parseInt(i.toString()[0]);

    if (firstDigit + lastDigit === 10) {
        console.log(i);
    }
}