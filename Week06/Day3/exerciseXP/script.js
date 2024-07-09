
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
/*
console.log([2] === [2])
console.log({} === {})
*/
/*
 * both expressions will always return false, since javascript compares by reference not value. Object and arrays are stored in different places in the memory so comparing them by reference (even if they include same values) will result in a false.
*/


// What is, for each object below, the value of the property number and why?

/*
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
*/

/**
 * Object1's number value: 4. Explanation - property value was reassigned
 * Object2's number value: 4. Explanation - object2 is a copy of object1 which makes them have the same reference - they point to the same object whenever 1 object change its value it appears on the other object too.
 * Object3's number value: 4. Explanation - object3 has the same refernece as object2 which has the same reference as object1 changing the value of object1 will be presented in object 3 which will have the same value - 4.
 * Object5's number value: 5. Explanation - object4 is a seperate object in an independent address in the memory. changing other objects won't affect its value, it remains 4.
 */



// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

/*
class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
    */

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

/*
class Mamal extends Animal{
    constructor(name,type,color){
        super(name,type,color)
    }

    sound(sound){
        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    }
}
*/

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

/*
farmerCow = new Mamal('Lily','cow','brown and white');
console.log(farmerCow.sound('Moooo'));
*/