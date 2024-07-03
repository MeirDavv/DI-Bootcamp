// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let solarSystem = [
    {name: 'Mercury', moon: 0, color: "orange"},
    {name: 'Venus', moon: 0, color: "grey"},
    {name: 'Earth', moon: 1, color: "blue"},
    {name: 'Mars', moon: 2, color: "red"},
    {name: 'Jupiter', moon: 79, color: "brown"},
    {name: 'Saturn', moon: 82, color: "yellow"},
    {name: 'Uranus', moon: 27, color: "lightblue"},
    {name: 'Neptun', moon: 14, color: "darkblue"},
];

let main = document.querySelector(".listPlanets");

let len = solarSystem.length

for (let i=0; i<len; i++){
    let planet = document.createElement('div');
    planet.classList.add('planet');
    planet.innerText = solarSystem[i].name;
    planet.style.backgroundColor = solarSystem[i].color;
    main.appendChild(planet);

    let moons =solarSystem[i].moon;

    let left = 0;
    for (let j=0; j<moons; j++){
        let moon = document.createElement('div');
        moon.classList.add("moon");
        moon.style.left = left + 'px';
        left += 30;
        planet.appendChild(moon);
    }
}