let selectedColor = null;
const colorTable = document.querySelector('.color-table');
const drawingBoard = document.querySelector('.drawing-board');
const clearButton = document.querySelector('.clear-button');

// Add drawing boxes in the drawing board
for (let i = 0; i<1800; i++){
    const box = document.createElement('div');
    box.classList.add('drawing-box');
    drawingBoard.appendChild(box);
}

// pick a color from the color table
colorTable.addEventListener('click', function(event){
    if(event.target.classList.contains("color-box")){
        selectedColor = window.getComputedStyle(event.target).backgroundColor;
    }
});

let isDrawing = false
drawingBoard.addEventListener('mousedown', function(event){
    event.target.style.backgroundColor = selectedColor;
    isDrawing = true;
});

drawingBoard.addEventListener('mouseup',function(){
    isDrawing = false;
});

drawingBoard.addEventListener('mousemove',function(event){
    if (isDrawing && event.target.classList.contains('drawing-box')){
        event.target.style.backgroundColor = selectedColor;
    }
});

clearButton.addEventListener('click', function(){
    let drawingBoxes = document.getElementsByClassName('drawing-box');
    for (let drawingBox of drawingBoxes){
        drawingBox.style.backgroundColor = 'white';
    }
});
