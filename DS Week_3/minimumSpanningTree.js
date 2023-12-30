class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.graph = Array(vertices).fill(null).map(() => Array(vertices).fill(0));
    }
  
    addEdge(src, dest, weight) {
      this.graph[src][dest] = weight;
      this.graph[dest][src] = weight;
    }
  
    primMST() {
      const parent = Array(this.vertices).fill(-1);
      const key = Array(this.vertices).fill(Number.MAX_SAFE_INTEGER);
      const mstSet = Array(this.vertices).fill(false);
  
      key[0] = 0;
  
      for (let count = 0; count < this.vertices - 1; count++) {
        const u = this.minKey(key, mstSet);
        mstSet[u] = true;
  
        for (let v = 0; v < this.vertices; v++) {
          if (this.graph[u][v] && !mstSet[v] && this.graph[u][v] < key[v]) {
            parent[v] = u;
            key[v] = this.graph[u][v];
          }
        }
      }
  
      this.printMST(parent);
    }
  
    minKey(key, mstSet) {
      let min = Number.MAX_SAFE_INTEGER;
      let minIndex = -1;
  
      for (let v = 0; v < this.vertices; v++) {
        if (!mstSet[v] && key[v] < min) {
          min = key[v];
          minIndex = v;
        }
      }
  
      return minIndex;
    }
  
    printMST(parent) {
      console.log("Edge \tWeight");
      for (let i = 1; i < this.vertices; i++) {
        console.log(parent[i] + " - " + i + "\t" + this.graph[i][parent[i]]);
      }
    }
  }
  
  // Example Usage for Prim's Algorithm
  const g = new Graph(5);
  g.addEdge(0, 1, 2);
  g.addEdge(0, 3, 6);
  g.addEdge(1, 2, 3);
  g.addEdge(1, 3, 8);
  g.addEdge(1, 4, 5);
  g.addEdge(2, 4, 7);
  g.addEdge(3, 4, 9);
  
  g.primMST();
  