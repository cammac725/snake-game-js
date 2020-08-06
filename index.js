
const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const scoreDisplay = document.getElementById('score');
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 20;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;

function createGrid() {
  // create 100 of these elements with a for loop
  for (let i = 0; i < width * width; i++) {
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

// function startGame() {

// }

function move() {
  if (
    // if snake has hit bottom
    (currentSnake[0] + width >= width*width && direction === width) ||
    // if snake has hit right wall
    (currentSnake[0] % width === width - 1 && direction === 1) ||
    // if snake has hit left wall
    (currentSnake[0] % width === 0 && direction === -1) ||
    // if snake has hit top
    (currentSnake[0] - width < 0 && direction === -width) ||
    squares[currentSnake[0] + direction].classList.contains('snake')
    ) {
    return clearInterval(timerId);
  }
  
  // remove last element from currentSnake array
  const tail = currentSnake.pop();
  // remove styling from last element
  squares[tail].classList.remove('snake');
  // add element in direction we are heading
  currentSnake.unshift(currentSnake[0] + direction);

  // deal with snake head getting the apple
  if (squares[currentSnake[0]].classList.contains('apple')) {
    // remove the class of apple
    squares[currentSnake[0]].classList.remove('apple');
    // grow the snake by adding class of snake to it
    squares[tail].classList.add('snake');
    // grow the snake array
    currentSnake.push(tail);
    // generate a new apple
    generateApple();
    // add one to the score
    score++;
    // display our score
    scoreDisplay.textContent = score;
    // speed up the snake
    clearInterval(timerId);
    intervalTime = intervalTime * speed;
    timerId = setInterval(move, intervalTime);
  }
  // add styling so we can see it
  squares[currentSnake[0]].classList.add('snake');
}

move()

let timerId = setInterval(move, intervalTime);

function generateApple() {
  do {
    // generate a random
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains('snake'))
  squares[appleIndex].classList.add('apple')
}
generateApple();

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