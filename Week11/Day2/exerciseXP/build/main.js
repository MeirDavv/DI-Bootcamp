"use strict";
// Exercise 1
class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Sedan {
    constructor(numberOfDoors, make, model) {
        this.numberOfDoors = numberOfDoors;
        this.make = make;
        this.model = model;
    }
    start() {
        return "engine was started";
    }
}
const combineObjects = (t, u) => {
    let combined;
    combined = Object.assign(Object.assign({}, t), u);
    return combined;
};
const t = {
    name: "Meir"
};
const u = {
    age: 23
};
const ut = combineObjects(t, u);
console.log(ut);
// Exercise 4
class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push();
    }
    pop() {
        return this.stack.pop();
    }
    isEmpty() {
        return (this.stack.length === 0);
    }
}
const numberStack = new Stack();
numberStack.push(10);
console.log(numberStack.pop());
console.log(numberStack.isEmpty());
