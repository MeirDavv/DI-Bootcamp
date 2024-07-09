// Exercise 1 : Print Full Name
// Instructions
// Create a function called printFullName.
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`


// Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)

function printFullName({first,last}){
    console.log(`Your full name is ${first} ${last}`);
}

printFullName({first: 'Elie', last:'Schoppik'}) 


// Exercise 2 : Keys And Values
// Instructions
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj){
    let newObj = sortByKey(obj);
    return [Object.keys(newObj),Object.values(newObj)];
}

function sortByKey(obj){
    let entries = Object.entries(obj)
    entries.sort(([key1],[key2]) => key1.localeCompare(key2));
    return Object.fromEntries(entries);
}

console.log(keysAndValues({ a: "Apple", c: "Google", b: "Microsoft" }));


// Exercise 3 : Counter Class
// Instructions
// Analyze the code below, what will be the output?
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);

/**
 * The output will be 3 since counterOne counterTwo are the same object and the object was increased from 0, 3 times.
 */

