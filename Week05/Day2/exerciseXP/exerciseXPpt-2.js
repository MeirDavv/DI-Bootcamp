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

// 🌟 Exercise 6 : Change The Navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
