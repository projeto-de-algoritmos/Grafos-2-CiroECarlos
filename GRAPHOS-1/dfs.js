function dfs(graph, startNode, goalNode) {
  let visited = new Set();
  let stack = [startNode];

  function dfsStep() {
    if (stack.length > 0 && !canEdit) {
      let currentNode = stack.pop();
      if (currentNode === goalNode) {
        canEdit = true;
        select("#modal-text").html("Carlos conseguiu encontrou o Ciro");
        select("#modal-container").show();
        return true;
      }

      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        let neighbors = graph[currentNode];

        for (let i = 0; neighbors && i < neighbors.length; i++) {
          stack.push(neighbors[i]);
        }

        let [x, y] = currentNode.toString().split("").map(Number);
        if (y === undefined) {
          [y, x] = [x, 0];
        }

        if ([0, 4].some((i) => i === grid[x][y])) {
          grid[x][y] = 4;
          setTimeout(dfsStep, 100); // Wait 250ms before processing the next node
          return;
        }
      }

      dfsStep();
    } else if (!canEdit) {
      select("#modal-text").html("Carlos não encontrou o Ciro");
      select("#modal-container").show();
      canEdit = true;
    }
  }

  dfsStep();
  return false;
}
