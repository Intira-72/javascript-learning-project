// IF Statements
// Example 1
let customerIsBanned = false;
let soup = "Chicken Noodle Soup";
let crackers = false;
let reply;

if (customerIsBanned) {
    reply = `No Soup For You!`;
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & Crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, We're out of ${soup}`;
};
// console.log(reply);


// Example 2
let testScore = 72;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    grade = "F";
};
console.log(grade);