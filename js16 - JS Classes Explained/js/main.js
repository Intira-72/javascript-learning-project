// Class
class Pizza {
    crust = "original"; // public field
    #sauce = "traditional"; // private field
    #size;

    constructor(pizzaSize) {
        this.#size = pizzaSize;        
        this.topping = [];
    };

    getCrust() {
        return this.crust;
    };

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    };

    getTopping() {
        return this.topping;
    }

    setTopping(topping) {
        this.topping.push(topping);
    }

    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }

    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`)
    };
}

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }

    slice() {
        console.log(`Our ${this.type} ${this._size} pizza has 8 slices.`)
    }
}

// Example 3
const sPizza = new Pizza("large")
sPizza.hereYouGo()
console.log(sPizza.getCrust())

// console.log(sPizza.#sauce)


// Example 2
const mySpacialy = new SpecialtyPizza("medium")
mySpacialy.slice()


// Example 1
// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setTopping("sausage");
// myPizza.setTopping("olive");

// console.log(myPizza.getTopping())
// console.log(myPizza.getCrust());


// Factory Function
function pizzaFactory(pizzaSize) {
    const crust = "original";
    const size = pizzaSize;

    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    }
};

const mPizza = pizzaFactory("small");
// mPizza.bake()
