

function makeGrid(v) {
    let gridContainer = document.getElementById("grid-container");

    for(let i=0; i < v; i++){
        let myRow = document.createElement('div');
        myRow.className = "row";
        for(let x = 1; x <= v; x++){
            let cell = document.createElement('div');
            cell.className = "gridSquare";
            //cell.innerText = (i * v) + x;
            myRow.appendChild(cell);
        }
        gridContainer.appendChild(myRow);
        }
    } 