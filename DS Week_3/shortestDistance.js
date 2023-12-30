class Dijkstra {
  constructor(vertices) {
    this.vertices = vertices;
    this.graph = Array(vertices)
      .fill(null)
      .map(() => Array(vertices).fill(0));
  }

  addEdge(src, dest, weight) {
    this.graph[src][dest] = weight;
    this.graph[dest][src] = weight; // Assuming an undirected graph
  }

  dijkstra(src) {
    const distance = Array(this.vertices).fill(Number.MAX_SAFE_INTEGER);
    const visited = Array(this.vertices).fill(false);

    distance[src] = 0;

    for (let count = 0; count < this.vertices - 1; count++) {
      const u = this.minDistance(distance, visited);
      visited[u] = true;

      for (let v = 0; v < this.vertices; v++) {
        if (
          !visited[v] &&
          this.graph[u][v] !== 0 &&
          distance[u] !== Number.MAX_SAFE_INTEGER &&
          distance[u] + this.graph[u][v] < distance[v]
        ) {
          distance[v] = distance[u] + this.graph[u][v];
        }
      }
    }

    this.printSolution(distance);
  }

  minDistance(dist, visited) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = -1;

    for (let v = 0; v < this.vertices; v++) {
      if (!visited[v] && dist[v] <= min) {
        min = dist[v];
        minIndex = v;
      }
    }

    return minIndex;
  }

  printSolution(dist) {
    console.log("Vertex \tDistance from Source");
    for (let i = 0; i < this.vertices; i++) {
      console.log(i + " \t" + dist[i]);
    }
  }
}

// Example Usage
const dijkstraGraph = new Dijkstra(5);
dijkstraGraph.addEdge(0, 1, 2);
dijkstraGraph.addEdge(0, 3, 6);
dijkstraGraph.addEdge(1, 2, 3);
dijkstraGraph.addEdge(1, 3, 8);
dijkstraGraph.addEdge(1, 4, 5);
dijkstraGraph.addEdge(2, 4, 7);
dijkstraGraph.addEdge(3, 4, 9);

dijkstraGraph.dijkstra(0);
