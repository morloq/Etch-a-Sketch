//create grid using javascript:
const container = document.querySelector(".container");

function createGrid() {
    let tbl = document.createElement('table');
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
/*
const redButton = document.querySelector('.red');
//redButton.onclick = () => changeColor();
const blackButton = document.querySelector('.black');
const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');
const yellowButton = document.querySelector('.yellow');
const rainbowButton = document.querySelector('.rainbow');
*/
createGrid();