// JavaScript Errors and Error Handling
"use strict";
const nakeError = () => {
    try {
        const name = "Intira";
        name = "Some One";
    } catch (err) {
        alert(err);

        console.error(err);
        console.warn(err);
        console.table(err);

        console.error(err.name);
        console.error(err.stack);
        logTheError(err.stack);
    };
};

const nakeError2 = () =>{
    try {
        // throw new cusError("This is a custom error!");
        throw new Error("This is a custom error!");
    } catch (err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    } finally {
        console.log("...finally")
    }
}

function cusError(msg) {
    this.message = msg;
    this.name = "Custom Error";
    this.stack = `${this.name}: ${this.message}`;
}

nakeError2();