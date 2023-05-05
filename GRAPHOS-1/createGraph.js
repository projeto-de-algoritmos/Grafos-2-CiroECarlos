var graph = [];
var grid = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
var canEdit = true;

function createGraph(n, noEdgesPositions) {
  let graph = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let currentNode = i * n + j;

      if (noEdgesPositions.includes(currentNode)) {
        continue;
      }

      let neighbors = [];

      if (i > 0) {
        neighbors.push((i - 1) * n + j);
      }

      if (i < n - 1) {
        neighbors.push((i + 1) * n + j);
      }

      if (j > 0) {
        neighbors.push(i * n + (j - 1));
      }

      if (j < n - 1) {
        neighbors.push(i * n + (j + 1));
      }

      graph[currentNode] = neighbors;
    }
  }

  return graph;
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
