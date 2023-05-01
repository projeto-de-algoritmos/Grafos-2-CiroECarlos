function dfsl(graph, startNode, goalNode) {
    let visited = new Set();
    let stack = [startNode];
  
    while (stack.length > 0) {
      let currentNode = stack.pop();
  
      if (currentNode === goalNode) {
        return true;
      }
  
      if (!visited.has(currentNode)) {
        let [x,y] = currentNode.toString().split('').map(Number);
        if (![1,2,3].includes(grid[x][y])) {
          grid[x][y] = 4;
        }
        visited.add(currentNode);
        let neighbors = graph[currentNode];
  
        for (let i = 0; i < neighbors.length; i++) {
          stack.push(neighbors[i]);
        }
      }
    }
  
    return false;
  }
  