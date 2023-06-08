//create 16x16 grid of square divs//
const gridContainer = document.querySelector(".grid_container");

for (i = 1; i <= (16 * 16); i++) {
  const div = document.createElement("div");
  div.classList.add("grid_square");
  gridContainer.appendChild(div);
}



