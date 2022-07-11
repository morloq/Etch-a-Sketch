//create grid using javascript:
function createGrid() {
    const container = document.getSelection(".container");
    const tbl = document.createElement('table');
    tbl.style.width = '1000px';
    tbl.style.height = '1000px';

    //16*16
    for(let i = 0; i < 16; i++)
    {
        const tableRow = tbl.insertRow();
        for(let j = 0; j < 16; j++)
        {
            const tableCell = tr.insertCell();
            tableCell.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
            tableCell.style.border = `1px solid black`;
        }
    }
    container.appendChild(tbl);
}
createGrid();