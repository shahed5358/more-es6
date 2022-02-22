// declare variable based on the name of an object property

const myObject = { x: 2, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log('myObject.p', myObject?.p?.q);

// destructuring array
const [p, q] = [23, 32, 32, 45];
console.log(p, q);

const [best, faltu] = ['momtaz', 'prshi'];
console.log(best, faltu);

const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: '500' };

// chaning

const company = {
    name: 'gp',
    ceo: { id: 1, name: 'ajmol', food: 'fucka' },
    web: { work: 'website develop', employ: 22, frameWork: 'react', tech: { first: 'html', second: 'css', third: 'js' } }
}
console.log(company.web.tech.third);
console.log(company?.backend?.tech?.third)
