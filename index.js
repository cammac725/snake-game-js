
const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const score = document.getElementById('score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let width = 20;

function createGrid() {

  // create 100 of these elements with a for loop
  for (let i = 0; i < 400; i++) {

    // create elements
    const square = document.createElement('div');

    // add styling to these element
    square.classList.add("square");

    // put the element into our grid
    grid.appendChild(square);

    // push it into a new squares array
    squares.push(square);
  }

}

createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'));

function move() {

  // remove last element from currentSnake array
  const tail = currentSnake.pop();

  // remove styling from last element
  squares[tail].classList.remove('snake');

  // add element in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction);

  // add styling so we can see it
  squares[currentSnake[0]].classList.add('snake');
}

move()

let timerId = setInterval(move, 1000);

// clearInterval(timerId);

// left-37,up-38, right-39, down-40

function control(e) {
  if (e.keyCode === 37) {
    direction = -1;
  }
  if (e.keyCode === 38) {
    direction = -width;
  }
  if (e.keyCode === 39) {
    direction = 1;
  }
  if (e.keyCode === 40) {
    direction = +width;
  }
}

document.addEventListener('keyup', control)