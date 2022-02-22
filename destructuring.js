const fish = { name: 'king Hilsh', id: 55, price: 9000, phone: '01871735358', address: 'chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;
console.log(phone, id);


const company = {
    name: 'gp',
    ceo: { id: 1, name: 'ajmol', food: 'fucka' },
    web: { work: 'website develop', employ: 22, frameWork: 'react' }
}
// const work = company.web.work;
// const frameWork = company.web.frameWork;
const { work, frameWork, employ } = company.web;
const { food, name } = company.ceo;
console.log(frameWork, food, work, employ, name);

