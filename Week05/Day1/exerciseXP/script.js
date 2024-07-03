// 🌟 Exercise 1 : List Of People
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

const people = ["Greg", "Mary", "Devon", "James"];
let index = people.indexOf("Greg");
Greg = people.splice(index, 1);

// Write code to replace “James” to “Jason”.

index = people.indexOf("James");
people.splice(index, 1, "Jason");

// Write code to add your name to the end of the people array.

people[people.length] = "Meir";

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

updated_people = people.slice(1,-1);

// Write code that gives the index of “Foo”. Why does it return -1 ?

index = people.indexOf("Foo");
console.log(index);
//It returns -1 since it's outside of the array - doesn't exist inside of it.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

last = people[people.length-1];
console.log(last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

for (let i in people){
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

for (let i in people){
    console.log(people[i]);
    if (people[i] =="Devon"){
        break;
    }
}

// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.

colors = ['Blue','Red','Green','Yellow','Purple']

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for (index in colors){
    console.log(`My #${index} choice is ${colors[index]}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus



// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// let input = prompt("Please provide a number: ")
// console.log(typeof(input))

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// do{
//     input = prompt("Please provide a number: ")
//     inputNumber = Number(input)
// }while(inputNumber < 10)


// 🌟 Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

let tenantName = building.nameOfTenants[1];
console.log(tenantName);
console.log(building.numberOfRoomsAndRent["dan"][0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1])
    building.numberOfRoomsAndRent.dan[1] = 1200

console.log(building.numberOfRoomsAndRent.dan[1]);

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.

family = {
    familyName : "Davidov",
    amountOfMembers : 6
};

// Using a for in loop, console.log the keys of the object.

let keys = Object.keys(family);

for (index in keys){
    console.log(keys[index]);
}

// Using a for in loop, console.log the values of the object.

let values = Object.values(family)

for (index in values){
    console.log(values[index]);
}

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

let str = "";
for (let key in details){
    str = str + key + " " + details[key] + " ";
}
console.log(str);

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters

societyName = [];
for (index in names){
    societyName.push(names[index][0]);
}
societyName.sort();
societyNameStr = societyName.join("")

// Console.log the name of their secret society. The output should be “ABJKPS”

console.log(societyNameStr);
