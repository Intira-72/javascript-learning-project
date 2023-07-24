// Strings
const number = 42;
const float = 42.01;
const string = "42";


console.log(number);
console.log(float);
console.log(string);
console.log(string + number);
console.log(Number(string) + number);
console.log(Number(string) === number);
console.log(string === number);
console.log(Number.isInteger(number));
console.log(Number.isInteger(string));
console.log(Number.parseFloat(float));
console.log(float.toString());
console.log(typeof Number.parseFloat("4.237abc").toFixed(2));
