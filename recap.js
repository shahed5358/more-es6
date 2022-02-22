// 1. let and const 
const hubby = 'shahed';
let phone = 'iphone-15';
phone = 'samsung';
console.log(phone);

// 2. default parameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);
// 3. template string
const myNotes = `I am mojno ${hubby}. I have a ${phone}.`;
console.log(myNotes);

// 4. arrow function

// function square(x) {
//     return x * x;
// }
// const borgo = square(7);
// console.log(borgo);

const square1 = x => x * x;
console.log(square1(6));

