//function creates a hover effect for each of the squares//
function hover () {
  const divs = document.querySelectorAll(".grid_square");

  divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      div.setAttribute("class", "hovered_square");
    })
  })
}

//function removes child nodes//
function remChild (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//function creates a certain number of squares in the grid depending on user choice "x"//
function createGrid (x) {
  for (i = 1; i <= (x * x); i++) {
    const div = document.createElement("div");
    div.classList.add("grid_square");
    gridContainer.appendChild(div);
    div.style.width = `${640 / squareSize}px`;
    div.style.height = `${640 / squareSize}px`;
  }
}

//create 16x16 grid of square divs when the page loads//
const gridContainer = document.querySelector(".grid_container");
let squareSize = 16;
createGrid(squareSize);
hover();

//asks the users for their size preference//
function askUser () {
  let userSelection = prompt("Choose the number of pixels per side", "16");
  if (parseInt(userSelection) > 100) {
    userSelection = prompt("Number is too large. Try again");
  }
  squareSize = parseInt(userSelection);

  remChild (gridContainer);
  createGrid(squareSize);
  hover();
}


