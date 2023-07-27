// Conditionals: Ternary Operator

// syntax
// Condition ? ifTrue : ifFalse
// Example 1
let soup = "Chiken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you" : soup ? `Yes, we have ${soup}` : "Sorry, No soup today."

// Example 2
let testScore = 72;
let grade = testScore >= 90 ? "A"
: testScore >= 80 ? "B"
: testScore >= 70 ? "C"
: testScore >= 60 ? "D"
: "F";
console.log(`My Test Grade Is A : ${grade}`)