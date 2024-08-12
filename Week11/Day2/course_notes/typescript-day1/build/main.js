"use strict";
// // let username = "John";
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string')
        return a + b + "";
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    return -1;
}
// const addRest = (a:number, ...rest: number[]): number => {
//   return rest
// }
const errorMessage = (msg) => {
    throw new Error(msg);
};
const listener = (param = true) => {
    // while(param){ }
};
let a = 'abc';
let b = a;
console.log(b);
b = 9;
let c = a;
// const date = document.getElementById('year') as HTMLSpanElement;
// date.textContent = '2024';
// const thisYear: string = new Date().getFullYear().toString();
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year ? year.textContent = thisYear : '';
class User {
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
    }
    getAge() {
        return `My age is ${this.age}`;
    }
    getActive() {
        return `Am I active? ${this.active}`;
    }
}
// let user1 = new User('John',25,true)
// console.log(user1.age);
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const stud1 = new Peeps('John');
const stud2 = new Peeps('Marry');
const stud3 = new Peeps('Anne');
console.log(stud1.name);
let user1 = {
    name: 'John',
    age: 35,
    active: true
};
let student1 = {
    name: 'John',
    age: 35,
    active: true,
    grade: 10
};
class Userr {
    constructor(name, age, active) {
        this._name = name;
        this._age = age;
        this._active = active;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get active() {
        return this._active;
    }
    set name(name) {
        this._name = name;
    }
}
