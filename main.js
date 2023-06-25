const sketch = document.querySelector('div.sketch');
selectedColor = "black";

// Create grid
for (let x = 0; x < 2000; x++) {

    const drawing = document.createElement('div');
    drawing.classList.add('drawing');
    drawing.style.width = "10px";
    drawing.style.height = "10px";
    sketch.appendChild(drawing);
    
}

// Paint grid on mouse click
function paintGrid(event, color) {

    if(event.buttons == 1)
    {
        if(event.target.classList =='drawing') {
            let square = event.target;
            square.style.backgroundColor = 'black';
        }
    }
    else return;
}

// Check mouse click an invoke paintGrid function
sketch.addEventListener('mousedown', event => {
    paintGrid(event, selectedColor);
    
    if(event.buttons == 1) {
        window.addEventListener('mouseover', event => {
            paintGrid(event, selectedColor);
        });
    } 
});

