// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.


// // // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // // #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

// //#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// //#5
// const a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?


//ANSWERS:
// #1.1 We will receive "inside the funcOne function 3" since the same a variable is being changed.
// #1.2 We will receive a typeError since we can't reassign a constant variable
// #2.1 We will receive 0 then 0 again, since the a outside the scope doesn't change
// #2.2 We will receive a typeError for the same reason as #1.2
// #3.1 We will receive "inside the funcFive function hello", since we called a function that declared a variable that exists outside the scope - in the window
// #4.1 We will receive "inside the funcFive function test", since we take the value of a that is declared inside the scope of the function, the outer value is irrelevant
// #5.1 Since a new variable a is declared inside of the if block, and the variable a outside of it isnt changed, we will receive inside the block "in the if block 5" and outside of it "outside of the if block 2"
// #5.2 What will happen? no change in results it will be the same since both variables are declared each independently and one of them inside a block, the other isn't



// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.

// const winbBattle = () => true;


// // Create a variable called experiencePoints.
// // Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// experiencePoints = (winbBattle) ? 10 : 1
// // Console.log the experiencePoints variable.
// console.log(experiencePoints);


// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// const isString = (input) => {
//     return(typeof input === 'string' || input instanceof String) 
//     ? true
//     : false
// };

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false



// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const sumAb = (a,b) => (a+b);


// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function getGrams1 (kg){
    return kg * 1000;
}
console.log(getGrams1(1))
// Then, use function expression and invoke it.
const getGrams2 = function (kg){
    return kg * 1000;
}
console.log(getGrams2(2))
// Write in a one line comment, the difference between function declaration and function expression.

//In addition to the different naming of each function, the main difference is that function declaration allows you to call the function from any place whereas function expression allows you to call it just after the expression

// Finally, use a one line arrow function and invoke it.

const getGrams3 = (kg) => kg*1000;

console.log(getGrams3(3));

// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (numberOfCildren, partnerName, geographicLocation, jobTitle) {
    let msg = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfCildren} kids.`
    let pElement = document.createElement('p')
    pElement.innerText = msg;
    bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.appendChild(pElement);
})();

(function () {
    userName = 'Meir';
    let divElement = document.createElement('div');
    let nameElement = document.createElement('span');
    nameElement.innerText = userName;

    let imgElement = document.createElement('img');
    imgElement.setAttribute("src","https://cdn-icons-png.flaticon.com/256/1144/1144760.png");
    imgElement.style.borderRadius = '50%';
    imgElement.style.height = '2rem';
    imgElement.style.width = '2rem';

    divElement.setAttribute("id","user-section")
    divElement.appendChild(nameElement);
    divElement.appendChild(imgElement);

    let navElement = document.getElementsByTagName('nav')[0];
    navElement.appendChild(divElement);
})();