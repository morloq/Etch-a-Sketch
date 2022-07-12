//create grid using javascript:
const container = document.querySelector(".container");
let rows, cells, table;

function createGrid() {
    table = document.createElement('table');
    table.style.width = '800px';
    table.style.height = '800px';
    table.style.borderSpacing = 0;

    //initial size: 16*16
    for(i = 0; i < 16; i++)
    {
        let tableRow = table.insertRow();
        tableRow.style.margin = 0;
        tableRow.style.border = "1px solid black";
        for(j = 0; j < 16; j++)
        {
            let tableCell = tableRow.insertCell();
            tableCell.style.border = "1px solid black";
            tableCell.style.backgroundColor = "white";
            tableCell.addEventListener("mouseover", () => {
                tableCell.style.backgroundColor = randomColor();
                console.log(randomColor());
            });
        }
    }
    container.appendChild(table);
}

document.querySelector(".clickMe").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
})

document.querySelector(".submit").addEventListener("click", updateValuesAndGrid());

function updateValuesAndGrid(){
    let rowsInput = document.querySelector(".rows");
    let cellsInput = document.querySelector(".cells");

    window.onload = function () {
        document.querySelector(".submit").addEventListener("click", () => {
            if(rowsInput.value.length == 0 || isNaN(rowsInput.value)){
                rows = 16;
            }
            if(cellsInput.value.length == 0 || isNaN(cellsInput.value)){
                cells = 16;
            }
            if(rowsInput.value <= 100 && rowsInput.value > 0){rows = rowsInput.value;}
            else{rows = 16;}
            if(cellsInput.value <= 100 && cellsInput.value > 0){cells = cellsInput.value;}
            else{cells = 16;}
            eraseOldGrid();
            drawNewGrid(rows, cells);
        });
    }
}

function eraseOldGrid(){
    table.textContent="";
}

function drawNewGrid(rows, cells){
    for(i = 0; i < rows; i++)
    {
        let tableRow = table.insertRow();
        tableRow.style.margin = 0;
        tableRow.style.border = "1px solid black";
        for(j = 0; j < cells; j++)
        {
            let tableCell = tableRow.insertCell();
            tableCell.style.border = "1px solid black";
            tableCell.style.margin = 0;
            tableCell.style.padding = 0;
            tableCell.style.backgroundColor = "white";
            tableCell.addEventListener("mouseover", () => {
                tableCell.style.backgroundColor = randomColor();
            });
        }
    }
    container.appendChild(table);
}


//generate random number between 0 and 255
function randomNumber() {
    let num;
    num = Math.floor(Math.random() * (255 - 0 +1) + 0);//random number between 0 and 255
    return num;
}

//random color in rgb format:
function randomColor() {
    let color = "rgb(";
    for(i = 0; i < 3; i++) {
        color += randomNumber();
        for(j = 0; j < 1; j++) {
            if(i != 2){
                color += ",";
            }
        }
    }
    color += ")";
    return color;
}

createGrid();
updateValuesAndGrid();