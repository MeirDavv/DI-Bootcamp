
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


for (let i = 1; i <= 6; i++){
    console.log('* '.repeat(i));
}

for (let i = 1; i <= 6; i++){
    line = []
    for (let j = 1; j <= i; j++){
        line.push("*")
    }
    lineStr = line.join(" ")
    console.log(lineStr)
}