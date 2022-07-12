//create grid using javascript:
const container = document.querySelector(".container");
let rows = 16;
let cells = 16;
function createGrid() {
    let tbl = document.createElement('table');
    tbl.style.width = '800px';
    tbl.style.height = '800px';

    //16*16
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

/*const button = document.querySelector(".clickMe").addEventListener("click", () => {
    let popup = window.open("", "enter size", "width=500, height=300");
    
});*/

createGrid();
document.querySelector(".clickMe").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
})

let newRows = document.querySelector(".rows").value;
console.log(newRows);
