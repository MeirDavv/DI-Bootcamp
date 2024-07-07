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

//#5
const a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

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