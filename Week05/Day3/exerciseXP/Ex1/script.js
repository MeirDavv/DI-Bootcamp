// Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.querySelector('h1');
console.log(h1);
// Using DOM methods, remove the last paragraph in the <article> tag.
let article = document.querySelector('article');
let lastP = document.querySelector('p:last-of-type');
console.log(lastP)
lastP.remove()
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector('h2');
h2.addEventListener("click", changeBackgroundToRed);
function changeBackgroundToRed(){
    h2.style.backgroundColor = 'red';
}
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.querySelector('h3');
h3.addEventListener("click", hideElement);
function hideElement(){
    h3.style.display = 'none';
}
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.getElementsByTagName('button')[0];
button.addEventListener('click',makeParagraphsBold);
let pElements = document.getElementsByTagName('p');
function makeParagraphsBold(){
    for (let p of pElements){
        p.style.fontWeight='700';
    }
}
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener('mouseover',changeH1SizeRandomly);
function changeH1SizeRandomly(){
    let fontSize = Math.random() * 101;
    h1.style.fontSize = fontSize + 'px';
}
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let secondP = pElements[1];
secondP.addEventListener("mouseover",fadeOut);
function fadeOut(){
    secondP.style.transition = 'opacity 1s';
    secondP.style.opacity = 0;
}