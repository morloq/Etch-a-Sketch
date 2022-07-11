//create grid using javascript:
const container = document.querySelector(".container");
let tr, tc;
function createGrid() {
    let tbl = document.createElement('table');
    tbl.style.width = '800px';
    tbl.style.height = '800px';

    //16*16
    for(i = 0; i < 16; i++)
    {
        tr = tbl.insertRow();
        tr.style.margin = 0;
        tr.style.border = "1px solid black";
        for(j = 0; j < 16; j++)
        {
            tc = tr.insertCell();
            tc.style.border = "1px solid black";
            tc.style.margin = 0;
            tc.style.color = "red";
        }
    }
    container.appendChild(tbl);
}
const redButton = document.querySelector('.red');
redButton.onclick = () => changeColor();
const blackButton = document.querySelector('.black');
const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');
const yellowButton = document.querySelector('.yellow');
const rainbowButton = document.querySelector('.rainbow');

let containerHover = container.addEventListener("mouseover", changeColor());

function changeColor(color){
    container.style.color = "white";
}
createGrid();