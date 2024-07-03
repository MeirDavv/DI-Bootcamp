// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
let div = document.getElementById('container');
console.log(div);
// Change the name “Pete” to “Richard”.

let firstUl = div.nextElementSibling;
let secondLi = firstUl.lastElementChild;
secondLi.innerText = 'Richard';

// Delete the second <li> of the second <ul>.
let secondUl = firstUl.nextElementSibling;
secondLi = secondUl.children[1];
secondLi.remove();
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

let ulElements = document.querySelectorAll('.list');
for (let ulElement of ulElements){
    ulElement.firstElementChild.textContent = 'Meir';
}



// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
ulElements = document.querySelectorAll('.list');
for (let ulElement of ulElements){
    ulElement.classList.add("student_list");
}
// Add the classes university and attendance to the first <ul>.
firstUl = ulElements[0];
firstUl.classList.add('university','attendance');

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
div.style.backgroundColor= 'lightblue';
div.style.padding = '10px';
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
div.nextElementSibling.nextElementSibling.lastElementChild.style.display = 'none';
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
div.nextElementSibling.lastElementChild.style.border = '5px solid black';
// Change the font size of the whole body.

body = document.getElementsByTagName('body');
body[0].style.fontSize = "40px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if(div.style.backgroundColor == "lightblue"){
    alert(`hello ${firstUl.firstElementChild.textContent} and ${firstUl.lastElementChild.textContent}`)
}

//Exercise 6 in exerciseXPpt-3