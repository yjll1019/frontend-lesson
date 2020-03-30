let min = 10;
let max = 20;

for (let i = 0; i < 30; ++i) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(number);
}