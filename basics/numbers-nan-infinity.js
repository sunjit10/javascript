// NaN - A "numeric value" that represents something that is not a number :-)
let val1 = 1 + NaN;
console.log(val1);

let val2 = 200 + 0/0;
console.log(val2); 

let val3 = 5/0;
console.log(val3);

// Using typeof 

console.log(typeof NaN);
console.log(typeof Infinity);

let val4 = NaN - NaN;
console.log(val4);

let val5 = NaN/NaN;
console.log(val5);

let val6 = 1/NaN;
console.log(val6);
