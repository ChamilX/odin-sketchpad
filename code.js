const container = document.querySelector(".container");
const button = document.querySelector(".create-grid");

button.addEventListener("click", function() {
    container.innerHTML = "";
    createGrid();
})

function createGrid() {
    for (i = 0; i < 5 * 5; i++) {
        const div = document.createElement("div");
        div.classList.add("block");
        div.addEventListener("mouseover", function() {
            div.setAttribute("class", "block-hover")
        })
        container.appendChild(div);
    }
}