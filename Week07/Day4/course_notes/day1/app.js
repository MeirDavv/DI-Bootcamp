// console.log('hello to nodejs');

// for(let i=0;i<5;i++){
//     console.log(i);
// }

// const hello = (name) =>{
//     return `Hello, ${name}, welcome to day 1 of Nodejs`
// }

// console.log(hello('dan'));


// module.exports = {
//     hello
// }

// const {multi, divide, plus, minus} = require("./math.js")



import {multi, divide, plus, minus} from "./math.js";

import addnumbers from "./math.js";

console.log(multi(2,3));

console.log(addnumbers(2,3));