async function bfs(graph, startNode, goalNode) {
  const queue = [startNode];
  const visited = new Set(queue);
  const path = new Map([[startNode, null]]);

  while (queue.length > 0 && !canEdit) {
    const currentNode = queue.shift();

    if (currentNode === goalNode) {
      select("#modal-text").html("Carlos conseguiu encontrou o Ciro");
      select("#modal-container").show();
      canEdit = true;
      const shortestPath = [];
      let node = goalNode;

      while (node !== startNode) {
        shortestPath.unshift(node);
        node = path.get(node);
      }
      shortestPath.unshift(startNode);

      return shortestPath;
    }

    const neighbors = graph[currentNode];
    for (let i = 0; neighbors && i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      if (!visited.has(neighbor)) {
        let [x, y] = neighbor.toString().split("").map(Number);
        if (y === undefined) {
          [y, x] = [x, 0];
        }

        if ([0, 4].some((i) => i === grid[x][y])) {
          grid[x][y] = 4;
        }
        await sleep(80);

        visited.add(neighbor);
        path.set(neighbor, currentNode);
        queue.push(neighbor);
      }
    }
  }
  if (!canEdit) {
    select("#modal-text").html("Carlos não encontrou o Ciro");
    select("#modal-container").show();
  }
  canEdit = true;
  return null;
}
