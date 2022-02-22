const friends = ['tom', 'shahed', 'rakib', 'tom herry'];

const fLengths = friends.map(friend => friend.length);
console.log(fLengths);


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 500000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'sticky note', price: 50, color: 'pink' },
    { name: 'glass', price: 50, color: 'white' },

];
const productNames = products.map(product => product.name);
const productColors = products.map(product => product.color);

products.map(product => console.log(product));

products.forEach(product => console.log(product));
console.log(productColors);