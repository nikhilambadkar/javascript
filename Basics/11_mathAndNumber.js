let score =100;
console.log(score);

let balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const randomNO=19.567
console.log(randomNO.toPrecision(3));

const randomN=199.567
console.log(randomN.toPrecision(3));

const randomNo_1=100000000;
console.log(randomNo_1.toLocaleString('en-IN'));


/**********************************Math**********************/

// console.log(Math);
// console.log(Math.abs(-1));
// console.log(Math.round(4.35));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.5));

let max=10;
let min=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)