//create grid using javascript:
const container = document.querySelector(".container");
let rows, cells;

function createGrid() {
    tbl = document.createElement('table');
    tbl.style.width = '800px';
    tbl.style.height = '800px';

    //16*16
    for(i = 0; i < 16; i++)
    {
        let tr = tbl.insertRow();
        tr.style.margin = 0;
        tr.style.border = "1px solid black";
        for(j = 0; j < 16; j++)
        {
            let tc = tr.insertCell();
            tc.style.border = "1px solid black";
            tc.style.margin = 0;
            tc.style.backgroundColor = "white";
            tc.addEventListener("mouseover", () => {
                tc.style.backgroundColor="orange";
            });
        }
    }
    container.appendChild(tbl);
}

createGrid();
document.querySelector(".clickMe").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
})

document.querySelector(".submit").addEventListener("click", updateValues());

function updateValues(){
    /*Newrows = document.querySelector(".rows").value;
    Newcells = document.querySelector(".cells").value;*/
    let rowsInput = document.querySelector(".rows");
    let cellsInput = document.querySelector(".cells");
    window.onload = function () {
        document.querySelector(".submit").addEventListener("click", () => {
            rows = rowsInput.value;
            cells = cellsInput.value;
            console.log(rows);
            console.log(cells);
        });
    }
}

function eraseOldGrid(){
    
}

function drawNewGrid(rows, cells){
    for(i = 0; i < rows; i++)
    {
        let tr = tbl.insertRow();
        tr.style.margin = 0;
        tr.style.border = "1px solid black";
        for(j = 0; j < cells; j++)
        {
            let tc = tr.insertCell();
            tc.style.border = "1px solid black";
            tc.style.margin = 0;
            tc.style.backgroundColor = "white";
            tc.addEventListener("mouseover", () => {
                tc.style.backgroundColor="orange";
            });
        }
    }
    container.appendChild(tbl);
}

updateValues();
