// Functions

// Global Scope:
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;    

    {
        var x = 11;
        const z = 6;

        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
};

myFunc()

// Local Scope:
// {
//     let y = 4;
//     console.log(`y in block scope: ${y}`)
// }

// // Local Scope:
// function myFunc() {
//     const z = 5;
//     return `z in function scope: ${z}`
// }

// console.log(myFunc())
// console.log(`global y: ${y}`)
// console.log(`global z: ${z}`)

