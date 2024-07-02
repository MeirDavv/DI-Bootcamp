// Create an array which value is the planets of the solar system.

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
let colors = ['purple','white','blue','orange','yellow','gray','lightblue','green']

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
section = document.querySelector('.listPlanets')
let index_color = 0
for (let planet of planets){
    div = document.createElement("div");
    div.setAttribute("class","planet");
    textNode = document.createTextNode(planet);
    div.appendChild(textNode);
    div.style.backgroundColor = colors[index_color];
    index_color ++;
    section.appendChild(div);
}

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?