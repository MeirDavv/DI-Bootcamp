
let myInterval
function myMove(){
    myInterval = setInterval(moveRight, 1);
}

let leftIndex = 0
function moveRight(){
    let redSquare = document.getElementById("animate");
    leftIndex += 1;
    redSquare.style.left = leftIndex + 'px';
    
    let container = document.getElementById("container");

    let redSquareWidth = parseInt(window.getComputedStyle(redSquare).width);
    let containerWidth = parseInt(window.getComputedStyle(container).width);

    if (leftIndex + redSquareWidth >= containerWidth){
        clearInterval(myInterval);
    }
} 