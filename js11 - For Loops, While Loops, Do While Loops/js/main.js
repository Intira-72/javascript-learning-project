// Loops
let num = 0;

// while (num < 15) {
//     num++;
//     console.log(num);
// }

// do {
//     num++;
//     console.log(num);
// } while (num < 15);

// for (let i = 0; i < 50; i++) {
//     console.log(i + 1)
// }

// let i = 0;
// for (; i < 10;) {
//     i++;
//     console.log(i);
// };

let fname = "INTIRA VINIT";
// for (let i = 0; i < fname.length; i++) {
//     console.log(fname.charAt(i))
// }

let counter = 0;
while (true) {
    myLetter = fname[counter]

    if (myLetter === fname[-1]) break;
    console.log(myLetter);    
    counter++;    
}