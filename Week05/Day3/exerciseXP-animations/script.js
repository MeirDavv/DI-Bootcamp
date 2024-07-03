// 🌟 Exercise 1: Timer
// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(alertHelloWorld, 2 * 1000);
function alertHelloWorld(){
    alert("Hello World");
}

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(addNewPara, 2 * 1000);
let div = document.getElementById("container");
function addNewPara(){
    newP = document.createElement("p");
    newP.innerText = "Hello World";
    console.log(newP);
    div.appendChild(newP);
}


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
