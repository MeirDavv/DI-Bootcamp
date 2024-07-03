// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
let form = document.getElementById("MyForm");
form.addEventListener("submit", formSubmit);
function formSubmit(event){
    event.preventDefault();
    let radius = document.getElementById("radius").value;
    if (!isNaN(radius)){
        let volumeCalculation = Math.PI*(4/3)*Math.pow(Number(radius),3);
        document.getElementById("volume").value = volumeCalculation;
    }

}