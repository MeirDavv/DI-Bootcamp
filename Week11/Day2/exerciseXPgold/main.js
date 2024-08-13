"use strict";
// Exercise 1
class Animal {
    speak() {
        return "The animal speaks";
    }
}
class Dog extends Animal {
    speak() {
        return "The animal speaks";
    }
}
const dog = new Dog();
console.log(dog.speak());
// Exercise 3
function printInfo(value) {
    if (typeof value === "number") {
        console.log(`The number is: ${value}`);
    }
    else if (typeof value === "string") {
        console.log(`The string is: ${value}`);
    }
}
// Exercise 4
function filterByProperty(array, property) {
    return array.filter(item => item[property] !== undefined);
}
class KeyValueStore {
    constructor() {
        this.store = new Map();
    }
    set(key, value) {
        this.store.set(key, value);
    }
    get(key) {
        return this.store.get(key);
    }
}
const store = new KeyValueStore();
store.set('Apple', 5);
store.set('Banana', 10);
console.log(store.get("apple"));
