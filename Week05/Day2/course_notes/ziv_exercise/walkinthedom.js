

// Exercise 1: Traversing the DOM
// Knowing how to traverse the DOM using JavaScript provides a foundation
// to altering an HTML page in real time.
// Using the HTML markup in Listing 1, perform these tasks:
let divContent = document.getElementById('content');

// 1. Use the firstElementChild / firstChild property to access an element.
let firstElemChild = divContent.firstElementChild;
// 2. Use the lastElementChild / lastChild  property to access an element.
let lastElemChild = divContent.lastElementChild;
// 3. Use the nextElementSibling / nextSibling  property to access an element.
let nextSib = firstElemChild.nextElementSibling;
// 4. Use the previousElementSibling / previousSibling  property to access an element.
let prevSib = nextSib.previousElementSibling;
// 5. Use the parentNode property to access an element.
let parent = firstElemChild.parentNode;
// 6. Use the childNodes property to access a group of child elements.
let childNodes = divContent.childNodes;
childNodes.forEach(node => {
  // Check if the node is an element node
  if (node.nodeType === 1) {
      console.log(node);
  }
});


// Exercise 2: Targeting nodes 
// In exercise 1, you learned how to target nodes in several ways.
// Continuing to use the markup in Listing 1, perform the following tasks:
// 1. Retrieve the value of a node using nodeValue / innerText / innerHTML.
// 2. Change the value of a node using nodeValue / innerText / innerHTML.

let textValue = firstElemChild.innerText;

firstElemChild.innerText = 'First content title'

console.log(textValue)
// 3. Retrieve the value of a node attribute.
let dataCustomValue = nextSib.getAttribute('data-custom')
console.log(dataCustomValue)
// 4. Change the value of a node attribute.
nextSib.setAttribute('data-custom', 'new-value')
console.log(nextSib.getAttribute('data-custom'))

// Exercise 3: Manipulating the DOM
// Now that you know how to traverse the DOM and alter node values,
// the next logical step is to learn how to add, remove, and replace nodes.
// Perform the following tasks:
// 1. Use the appendChild method to add a node.
const para = document.createElement("p");
const node = document.createTextNode("This is new");
para.appendChild(node);
const element = document.getElementById("content");
element.appendChild(para);
// 2. Use the insertBefore method to add a node.
divContent.insertBefore(para,lastElemChild);

// 3. Use the removeChild method to remove a node.
divContent.removeChild(para);
// 4. Use the replaceChild method to replace a node.
divContent.replaceChild(lastElemChild,firstElemChild);