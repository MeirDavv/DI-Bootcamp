// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

/*
array = [1, 2,"dfd", 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
console.log(array);
*/

/* 
The output will be a list where the numbers there are multiplied by 2 and the other variables that are not numbers become undefined
*/


// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

/*

array = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
console.log(array);

/*
the result will be a concatenation of all arrays, starting with the initial array of [1,2] then [0,1] then [2,3] => at the end we will get [1,2,0,1,2,3]
*/

// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// What is the value of i ?

/*
The last printed i is the last index which is 5, but the i itself cant be accessed since its inside the inner scope.
*/

// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.

/*
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flat(2));
*/

// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const joinedGreeting = greeting.map((item) => {
    return item.join(" ");
})
console.log(joinedGreeting);

// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
const strGreeting = joinedGreeting.join(" ");
console.log(strGreeting);
// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const unTrapped = trapped.flat(Infinity);
console.log(unTrapped)