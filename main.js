let gridSize = 10;
let rows = gridSize;
let cols = gridSize;
let grid = [];
let graph = [];
let playerPosition = null;
let goalPosition = null;
let wallsPositions = [];
let selectedObject = null;
var showModal = false;
//Dom elements
var playerBtn;
var wallBtn;
var goalBtn;
var closeModal;
var modalText;
var modal;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvas-container");
  playerBtn = select("#player-btn");
  wallBtn = select("#wall-btn");
  goalBtn = select("#goal-btn");
  closeModal = select("#close-modal");
  modalText = select("#modal-text");
  modal = select("#modal-container");
  dfs = select("#dfs");
  canvas.mouseClicked(clickGrid);
  playerBtn.mouseClicked(() => (selectedObject = "player"));
  wallBtn.mouseClicked(() => (selectedObject = "wall"));
  goalBtn.mouseClicked(() => (selectedObject = "goal"));
  dfs.mouseClicked(() => {
    graph = createGraph(gridSize,wallsPositions)
    console.log(graph);
    });
  closeModal.mouseClicked(() => {
    modal.hide();
  });
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

//paint
// 0: blank
// 1: wall
// 2: player
// 3: goal
// 4: path
function drawGrid() {
  let cellWidth = width / cols;
  let cellHeight = height / rows;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      switch (grid[i][j]) {
        case 1:
          fill(0, 0, 0);
          break;
        case 2:
          fill(0, 255, 0);
          break;
        case 3:
          fill(0, 0, 255);
          break;
        case 4:
          fill(122, 122, 0);
          break;
        default:
          fill(255);
          break;
      }
      rect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
    }
  }
}

function clickGrid() {
  let cellWidth = width / cols;
  let cellHeight = height / rows;
  let col = floor(mouseX / cellWidth);
  let row = floor(mouseY / cellHeight);
  if (!selectedObject) {
    modalText.html("É necessário selecionar um objeto para inserir");
    modal.show();
  }
  let position = row * 10 + col;
  let tileColor = updateObjectPosition(position, selectedObject);
  if (tileColor === -1) {
    modalText.html("Objeto não pode ser colocado");
    modal.show();
    return;
  }
  grid[row][col] = tileColor;
}

function updateObjectPosition(position, object) {
  if (object !== "player" && !!playerPosition && playerPosition === position) {
    return -1;
  }

  if (object !== "goal" && !!goalPosition && goalPosition === position) {
    return -1;
  }

  if (
    object !== "wall" &&
    wallsPositions.length > 0 &&
    wallsPositions.some((i) => i === position)
  ) {
    return -1;
  }

  if (object === "player") {
    if (playerPosition === null) {
        playerPosition = position;
        return 2;
    }
    if (playerPosition !== position) {
        return -1;
    }
    playerPosition = null;
    return 0;
  }

  if (object === "goal") {
    if (goalPosition === null) {
        goalPosition = position;
        return 3;
    }
    if (goalPosition !== position) {
        return -1;
    }
    goalPosition = null;
    return 0;
  }

  if (object === "wall") {
    let wall = wallsPositions.find((i) => i === position);
    if (wall !== undefined) {
      wallsPositions = wallsPositions.filter((i) => i !== position);
      return 0;
    }
    wallsPositions.push(position);
    return 1;
  }

  if (object === "path") {
    return 4;
  }

  return 0;
}
