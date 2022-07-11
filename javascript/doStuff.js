//create grid using javascript:
function createGrid() {
    const container = document.querySelector(".container");
    console.log(container);
    var tbl = document.createElement('table');
    tbl.style.width = '800px';
    tbl.style.height = '800px';

    //16*16
    for(let i = 0; i < 16; i++)
    {
        var tr = tbl.insertRow();
        tr.style.margin = 0;
        tr.style.border = "1px solid black";
        for(let j = 0; j < 16; j++)
        {
            var tc = tr.insertCell();
            tc.style.border = "1px solid black";
            tc.style.margin = 0;
        }
    }
    container.appendChild(tbl);
}

createGrid();