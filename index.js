
const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const score = document.getElementById('score');
let squares = [];

function createGrid() {
  // create 100 of these elements with a for loop
  for (let i = 0; i < 400; i++) {
    // create elements
    const square = document.createElement('div');
    // add styling to these element
    square.classList.add("square")
    // put the element into our grid
    grid.appendChild(square);
    // push it into a new squares array
    squares.push(square);
  }
  console.log(squares)
}

createGrid()