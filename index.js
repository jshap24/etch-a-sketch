const gridContainer = document.getElementById("grid-container");   

let gridSize = 24;
const slider = document.getElementById("sizeChoice");
const sliderOutput = document.getElementById("sliderValue")
sliderOutput.innerHTML = (slider.value + "x" + slider.value) ;

slider.onchange = function() {
  sliderOutput.innerHTML = (this.value + "x" + this.value);
}

slider.addEventListener('change', () => {
    removeAllChildNodes(gridContainer);
    makeGrid(slider.value);
  });

makeGrid(gridSize);

function makeGrid(v) {
    //let gridContainer = document.getElementById("grid-container");
    for(let i=0; i < v; i++){
        let myRow = document.createElement('div');
        myRow.className = "row";
        for(let x = 1; x <= v; x++){
            let cell = document.createElement('div');
            cell.className = "gridSquare";
            //cell.innerText = (i * v) + x;
            cell.addEventListener('mouseover', 
             e => e.target.classList.add('sketchColor')
            )
            myRow.appendChild(cell);
        }
        gridContainer.appendChild(myRow);
        }
   gridContainer.style.setProperty(`grid-template-columns`, `repeat(${slider.value}, 1fr)`)
   gridContainer.style.setProperty(`grid-template-rows`, `repeat(${slider.value}, 1fr)`)
    } 

function changeGridSize() {
    document.gridContainer.style.setProperty(`--grid-template-columns`, `repeat(${slider.value}, 1fr)`)
    document.gridContainer.style.setProperty(`--grid-template-rows`, `repeat(${slider.value}, 1fr)`)
}

//Making functionality for the reset button
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function reset(){
    removeAllChildNodes(gridContainer);
    makeGrid(24);
}


