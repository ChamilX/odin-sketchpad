const container = document.querySelector(".container");
const button = document.querySelector(".create-grid");
let row = 0;
let column = 0;

button.addEventListener("click", function() {
    container.innerHTML = "";
    row = prompt("Number of squares per row (max 100)");
    if (row > 100) {
        alert("row over a 100!!");
        row = 4;
    }
    column = prompt("Number of squares per column (max 100)");
    if (column > 100) {
        alert("column over a 100!!")
        column = 4;
    }
    createGrid(row, column);
})

function calcRow(row) {
    let width = (50 * row) + 50;
    width = width.toString();
    return width + "px";
}

function calcColumn(column) {
    let width = (50 * column) - 50;
    width = width.toString();
    return width + "px";
}

function createGrid(rowSize, columnSize) {
    container.style.width = calcRow(rowSize);
    container.style.height = calcColumn(columnSize);
    for (i = 0; i < rowSize * columnSize; i++) {
        const div = document.createElement("div");
        div.classList.add("block");
        div.addEventListener("mouseover", function() {
            div.setAttribute("class", "block-hover")
        })
        container.appendChild(div);
    }
}