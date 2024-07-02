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

let div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).

let liElement = document.createElement("li");

// Create a new text node with “Logout” as its specified text.
let textNode = document.createTextNode("Logout");
// Append the text node to the newly created list node (<li>).
liElement.appendChild(textNode);
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ulElement = document.querySelector("#socialNetworkNavigation ul");
ulElement.appendChild(liElement);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
firstLiContent = ulElement.firstElementChild.textContent;
lastLiContent = ulElement.lastElementChild.textContent;

console.log("first li content: " + firstLiContent + " last li content: " + lastLiContent);

// Continue on exerciseXP-pt4.js