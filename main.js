let rows = 10;
let cols = 10;
let grid = [];

const simulateBtn = document.getElementById("simulate-btn");
const playerBtn = document.getElementById("player-btn");
const wallBtn = document.getElementById("wall-btn");
const objectiveBtn = document.getElementById("objective-btn");
simulateBtn.addEventListener("click", () => {console.log("Simulando")});
playerBtn.addEventListener("click", () => {console.log("PLayer")});
wallBtn.addEventListener("click", () => {console.log("Parede")});
objectiveBtn.addEventListener("click", () => {console.log("Objetivo")});

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container')
  for (let i = 0; i < rows; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      grid[i][j] = false;
    }
  }
}

function draw() {
  background(220);
  drawGrid();
}

function drawGrid() {
  let cellWidth = width / cols;
  let cellHeight = height / rows;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) {
        fill(255, 0, 0);
      } else {
        fill(255);
      }
      rect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
    }
  }
}

function mouseClicked() {
  let cellWidth = width / cols;
  let cellHeight = height / rows;
  let col = floor(mouseX / cellWidth);
  let row = floor(mouseY / cellHeight);
  grid[row][col] = !grid[row][col];
}
