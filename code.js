const container = document.querySelector(".container");
const button = document.querySelector(".create-grid");
let size = 0;
let opacity = 0;

button.addEventListener("click", function() {
    container.replaceChildren();
    size = prompt("Size of the grid (max 100)");
    if (size > 100) {
        alert("size over a 100!!");
        size = 4;
    }
    createGrid(size);
})

function randomColor(){
    let red = Math.floor((Math.random() * 255) + 1).toString();
    let green = Math.floor((Math.random() * 255) + 1).toString();
    let blue = Math.floor((Math.random() * 255) + 1).toString();

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("block");
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = randomColor();
        })
        div.style.width = (500 / gridSize).toString() + "px";
        div.style.height = (500 / gridSize).toString() + "px";
        container.appendChild(div);
    }
}