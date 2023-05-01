export function dfs(graph, startNode, goalNode) {
    let visited = new Set();
    let stack = [startNode];
  
    while (stack.length > 0) {
      let currentNode = stack.pop();
  
      if (currentNode === goalNode) {
        return true;
      }
  
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        let neighbors = graph[currentNode];
  
        for (let i = 0; i < neighbors.length; i++) {
          stack.push(neighbors[i]);
        }
      }
    }
  
    return false;
  }
  