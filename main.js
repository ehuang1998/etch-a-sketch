var currentColor = '#000000';
var currentSize = 16;
var currentMode = 'color';

const colorPicker = document.getElementById('colorPicker');
const colorMode = document.getElementById('colorMode');
const eraserSelector = document.getElementById('eraser');
const gridSelector = document.getElementById('gridSelector');
const gridValue = document.getElementById('gridValue');
const sketch = document.querySelector('div.sketch');


colorPicker.oninput = (e) => { currentColor = e.target.value };
colorMode.onclick = () => setCurrentMode('color');
eraserSelector.onclick = () => setCurrentMode('eraser');
gridSelector.onmousemove = (e) => changeValue(e.target.value);
gridSelector.onchange = (e) => reloadGrid(e.target.value)


// Load grid on page startup
window.onload = () => {

    createGrid(currentSize)
}

// Create the grid 
function createGrid(size) {
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let x = 0; x < size * size; x++) {

        const drawing = document.createElement('div');
        drawing.classList.add('drawing');
        sketch.appendChild(drawing);
    }
}

function changeValue(size) {

    currentSize = size;
    gridValue.textContent = currentSize + " x " + currentSize;
}


// Reload the grid when size changes
function reloadGrid() {

    sketch.innerHTML = '';
    createGrid(currentSize);
}

// Set the current mode for painting
function setCurrentMode(mode) {
    currentMode = mode;
}


// Paint grid on mouse click
function paintGrid(event, color) {

    if(event.buttons == 1)
    {
        if (currentMode === 'color') {
            if(event.target.classList == 'drawing') {
                let square = event.target;
                square.style.backgroundColor = color;
            }
        }

        if (currentMode === 'eraser') {
            if(event.target.classList == 'drawing') {
                let square = event.target;
                square.style.backgroundColor = '#fefefe';
            }
        }
    }
    else return;
}

// Check mouse click and invoke paintGrid function
sketch.addEventListener('mousedown', event => {
    paintGrid(event, currentColor);
    
    if(event.buttons == 1) {
        window.addEventListener('mouseover', event => {
            paintGrid(event, currentColor);
        });
    } 
});

