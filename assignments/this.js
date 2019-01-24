/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, 'this' refers to the entire window.
* 2. When used in a method, 'this' refers to the object in front of the dot.
* 3. When used in a constructor, 'this' refers to the object being made.
* 4. When using call or apply, the argument given overrides what 'this' is.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const windowThis = () => {
    console.log(this);
}
windowThis();

// Principle 2

// code example for Implicit Binding
const obj = {
    name: 'Bob',
    sayName: function() {
        console.log(`Hi, my name is ${this.name}!`)
    }
}
obj.sayName();

// Principle 3

// code example for New Binding
function Human(food) {
    this.favFood = food;
    this.logSelf = function () {
        console.log(this);
    }
}
const diana = new Human('pineapple');
diana.logSelf();

// Principle 4

// code example for Explicit Binding
const adam = new Human('brownies');
adam.logSelf();
adam.logSelf.call(diana);