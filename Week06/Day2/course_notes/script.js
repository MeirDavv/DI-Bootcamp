/*
You are tasked with writing a function `solution` 
that takes a string `S` as input. 
The string consists of 'a' and/or 'b' characters. 
The function should return `true` 
if all occurrences of the letter 'a' appear before all occurrences of the letter 'b' 
in the string `S`. 
If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
the function should also return `true`. 
Otherwise, it should return `false`.

aabb - true
bbaa - flase
aaa - true
bbb - true
ababa - flase
*/

const testCases = [
    { input: "aabbb", output: true },
    { input: "ba", output: false },
    { input: "aaa", output: true },
    { input: "b", output: true },
    { input: "abba", output: false },
    { input: "a", output: true },
    { input: "bbaa", output: false },
    { input: "bbba", output: false },
    { input: "aabb", output: true },
    { input: "bababab", output: false },
    { input: "babababa", output: false },
    { input: "aabababb", output: false },
    { input: "baaab", output: false },
    { input: "bbabbabbababbab", output: false },
    { input: "babaabaaab", output: false },
    { input: "ab", output: true },
    { input: "ababa", output: false },
  ];

const solution = (s) => {
    str = s;
    while (str!=""){
        let indexA = str.indexOf('a')
        let indexB = str.indexOf('b')
        if(indexA == -1 || indexB == -1)
            break;
        if (indexA > indexB)
            return false;
        else{
            str = str.substring(1)
        }
    }
    return true;
}

function testSolution() {
    for (let i = 0; i < testCases.length; i++) {
      const { input, output } = testCases[i];
      const result = solution(input);
      console.log(
        `Input: "${input}", Output: ${result}, Expected Output: ${output} Result: ${
          result === output ? "OK" : "NOT OK"
        }`
      );
    }
  }
  testSolution();


emails = []
users.foreach((user)=> {
    emails.push (user +"@gmail.com")
});

const multiply2 = (arr) => {
    let arr2 = [];
    arr.foreach((item) => {
        arr2.push (item*2);
    })
    return arr2;
}




// array = [2,5,10,100];
// let sum = 0;
// function sum(array){
//     for (let item of array){
//         sum+=item
//     }
//     return sum;
// }

let users = [
    { userid: 1, name: "John", email: "jjj@gmail.com" },
    { userid: 2, name: "Marry", email: "mmm@gmail.com" },
    { userid: 3, name: "Anne", email: "aaa@gmail.com" },
    { userid: 4, name: "Anne", email: "aaa@gmail.com" },
  ];

const find = (arr) => {
    for (let item of arr){
        if(item.userid === 3 ) return item;
    }
}

console.log(find(users));