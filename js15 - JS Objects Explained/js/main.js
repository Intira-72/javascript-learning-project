// Objects
// key-value pairs in curly braces
const obj = { name: "Intira"};
const antObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return(`Time for ${this.beverage.afternoon}`)
    }
}

console.log(`My name is ${obj.name}`);
console.log(antObj.alive);
console.log(antObj.hobbies[0]);
console.log(antObj['beverage'].morning);
console.log(antObj.action());
console.log("\n")



// Example 2
console.log("-------------------- Example 2 --------------------")
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooom";
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;

console.log("- Truck -");
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() { return "Whoooosh!"};

console.log("- Car -");
console.log(car);
console.log(car.wheels);
console.log(car.engine());

const tesla = Object.create(car);
tesla.engine = function() { return "Shhhhhhhhh..."};

console.log("- Tesla -");
console.log(tesla);
console.log(tesla.wheels);
console.log(tesla.engine());
console.log("\n");


// Example 3
console.log("-------------------- Example 3 --------------------")
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

console.log(Object.keys(band));
console.log(Object.values(band));


for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}`);
};

console.log(band.hasOwnProperty("drums"));

delete band.drums;
console.log(band.hasOwnProperty("drums"));


// destructuring objects
const { guitar: myMember, bass: myBass, vocals} = band;

console.log(myMember);
console.log(myBass);
console.log(vocals);

// destructuring objects with function
function sings({ vocals }) { return `${ vocals } sings!`};
console.log(sings(band));