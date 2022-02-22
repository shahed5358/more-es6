const numbers = [5, 13, 7, 41, 29, 30];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
console.log(smallNumbers);
console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 500000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'sticky note', price: 50, color: 'pink' },
    { name: 'glass', price: 50, color: 'white' },

];
const expensive = products.filter(product => product.price > 100);
console.log(expensive);

const black = products.filter(product => product.color == 'black');
console.log(black);

const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);