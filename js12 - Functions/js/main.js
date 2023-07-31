// Functions

// Methods = Built-in Functions
let fname = "Intira"
// console.log(fname.toLowerCase())

// Function Declaration Syntax:
function sum(num_1, num_2=0) {
    return num_1 + num_2;
}
// console.log(sum(5, 7));

function getUserNameFromEmail(email) {    
    return email.slice(0, email.indexOf("@"));
}
// console.log(getUserNameFromEmail("user.one@email.com"))

const toProperCase = (fname) => {
    return fname.charAt(0).toUpperCase() + fname.slice(1);
}
console.log(toProperCase("intira"))