
// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

/**
 * The output will be: "I am John Doe from Vancouver,Canada. Latitude(49.2827), Longitude(-123.1207)
 */

// 🌟 Exercise 2: Display Student Info
// Instructions
/*
function displayStudentInfo(objUser){
    const {first,last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
*/

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'


// 🌟 Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }
/*
const users = { user1: 18273, user2: 92833, user3: 90315 }
*/
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
/*
const entries = Object.entries(users)
console.log(entries);
*/
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
/*
const modified = entries.map(([key,value]) => [key,value*2]);
console.log(modified);
*/

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
/*
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
*/
/**
 * Output will be object since a class is an object
 */

// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//   // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

/* 
Option #2 will extend the class dog the right way, since the constructor exists, the super exists and all methods get values
*/

// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

console.log([2] === [2])
console.log({} === {})

