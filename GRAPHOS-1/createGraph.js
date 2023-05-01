export function createGraph(n, noEdgesPositions) {
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
  