let rows = 10;
let cols = 10;
let grid = [];

function setup() {
  createCanvas(400, 400);
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
