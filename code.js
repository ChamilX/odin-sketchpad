const container = document.querySelector(".container");
const button = document.querySelector(".create-grid");

button.addEventListener("click", function() {
    createGrid();
})

function createGrid() {
    for (i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("block");
        container.appendChild(div);
    }
}