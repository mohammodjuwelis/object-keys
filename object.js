const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

const keys = Object.keys(glass);
console.log(keys[0]);

const values = Object.values(glass);
console.log(values[2]);
for(let i = 0; i <= values.length-1; i++) {
    console.log(values[i])
}

// the entries  give of array of array 
const entries = Object.entries(glass);
console.log(entries);

// how to delete key from object 
const del = delete glass.isCleaned;
// give the Boolean type true 
console.log(del)

// delete from object this a way 
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// the object is freeze not key add 
Object.freeze(glass);
glass['juwel'] = 'hollow';
console.log(glass)
// console.log(freeze);

const seal = Object.seal(glass)
glass['alu'] = 'hollow';
console.log(seal)







