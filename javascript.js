//Clears the grid//
function clearGrid () {
  console.log("balls");
  const divs = document.querySelectorAll(".grid_square");

  divs.forEach((div) => {
    div.style.backgroundColor = "rgb(0,0,0)";
  })
}


//function generates random colours//
let r;
let g;
let b;

function randomColourGen () {
  r = Math.floor((Math.random() * 255));
  g = Math.floor((Math.random() * 255));
  b = Math.floor((Math.random() * 255));
  userColour = `rgb(${r},${g},${b})`; 
}

//function returns the colour to the default value//
function defCol () {
  userColour = "#00FF41";
  console.log("notballs")

  const divs = document.querySelectorAll(".grid_square");

  divs.forEach((div) => {
    div.removeEventListener("mouseout", randomColourGen);
  }) 
}

//allows the colour picker to change the colour used in the grid//
let colButton = document.getElementById("colourpicker");
let userColour = colButton.value;

colButton.addEventListener("change", (e) => {
  const divs = document.querySelectorAll(".grid_square");
  divs.forEach((div) => {
    div.removeEventListener("mouseout", randomColourGen);
  })
  userColour = e.target.value;
})

//function generate random colours for each pass through//
function genRanCol () {
  randomColourGen ();
  const divs = document.querySelectorAll(".grid_square");
  
  divs.forEach((div) => {
    div.addEventListener("mouseout", randomColourGen);
  })
}

//allows the slider to choose the square size//
function sliderChange () {
  const sliderElement = document.getElementById("slider");
  console.log(sliderElement.value + 1000);
  remChild (gridContainer);
  squareSize = sliderElement.value;
  createGrid(squareSize);
  hover();
}  



//function creates a hover effect for each of the squares//
function hover () {
  const divs = document.querySelectorAll(".grid_square");

  divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      div.style.backgroundColor = `${userColour}`;
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









