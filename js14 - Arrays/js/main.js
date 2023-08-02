// Arrays
const arrs = [];

// add elements to an array
arrs[0] = "Intira";
arrs[1] = 1001;
arrs[2] = true;

//refer to an array
console.log(arrs);
console.log(`Array Index 0: ${arrs[0]}`);

// length property
console.log(`Array Length: ${arrs.length}`);

//last element in an array
console.log(`Last: ${arrs[arrs.length - 1]}`);

// add a new item after the last item in the array.
arrs.push("school");
console.log(arrs);

// remove the last item from the array.
const lastArray = arrs.pop();
console.log(`Last Array: ${lastArray}`);
console.log(arrs);

// add a new item before the first item of the array.
arrs.unshift(42);
console.log(arrs);

// remove the first item from the array
const firstArray = arrs.shift();
console.log(`First Array: ${firstArray}`);
console.log(arrs);

// delete item in the array and position of item will become empty
delete arrs[1];
console.log(arrs);

// remove elements from array
arrs.splice(2, 2);
console.log(arrs);

// replace element
arrs.splice(1, 1, 42);
console.log(arrs);

// insert element
arrs.splice(1, 0, 27);
console.log(arrs);

const newArray = arrs.slice(1);
console.log(arrs);
console.log(newArray);

const reverseArray = arrs.reverse();
console.log(reverseArray);

const joinStr = arrs.join("-");
console.log(joinStr);

const stringToArray = joinStr.split("-");
console.log(stringToArray);

const arrs2 = ["One", "Two", "Three"];
const conArray = arrs.concat(arrs2);
console.log(arrs2);
console.log(conArray);

const spreadOperatorArray = [...arrs, ...arrs2];
console.log(spreadOperatorArray);


const equipSheIfA = ["baseball", "football", "volleyball"];
const equipSheIfB = ["basketball", "golf balls", "tennis balls"];

const clothesSheIfA = ["tank tops", "t-shirts", "jerseys"];
const clothesSheIfB = ["sweat tops", "sweat pants", "hoodies"];

const equipDept = [equipSheIfA, equipSheIfB];
const clothesDept = [clothesSheIfA, clothesSheIfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][1][0]);
