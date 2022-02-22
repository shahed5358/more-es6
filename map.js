const numbers = [4, 6, 8, 10];
console.log(numbers);
const output2 = [];

function doubleOld(number) {
    return number * 2;
}

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);


// 1. loop
// 2. element diye function ke call korsi
// 3. result for each element will be store in array


// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
console.log(output);

const square = numbers.map(x => x * x);
console.log(square);

const sum = numbers.map(x => x + x + x);
console.log(sum);
