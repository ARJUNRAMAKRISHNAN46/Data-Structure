class Graph {
    constructor() {
      this.adjacancyList = {};
    }
  
    addVertex(vertex) {
      if(!this.adjacancyList[vertex]) {
        this.adjacancyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2) {
      if(!this.adjacancyList[vertex1]) {
        this.addVertex(vertex1);
      }
  
      if(!this.adjacancyList[vertex2]) {
        this.addVertex(vertex2);
      }
  
      this.adjacancyList[vertex1].add(vertex2);
      this.adjacancyList[vertex2].add(vertex1);
    }
  
    hasEdge(vertex1, vertex2) {
      return (
        this.adjacancyList[vertex1].has(vertex2) &&
        this.adjacancyList[vertex2].has(vertex1)
      )
    }
  
    removeEdge(vertex1,vertex2) {
      this.adjacancyList[vertex1].delete(vertex2);
      this.adjacancyList[vertex2].delete(vertex1);
    }
  
    removeVertex(vertex) {
      if(!this.adjacancyList[vertex]) {
        return 
      }
  
      for(let adjacanctVertex of this.adjacancyList[vertex]) {
        this.removeEdge(vertex,adjacanctVertex);
      }
      delete this.adjacancyList[vertex];
    }
  
    display() {
      for(let vertex in this.adjacancyList) {
        console.log(vertex + '->' + [...this.adjacancyList[vertex]]);
      }
    }
  }
  
  const graph = new Graph();
  
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  
  graph.addEdge('A','B');
  graph.addEdge('B','C');
  
  graph.removeVertex('B');
  
  graph.display();
  // console.log(graph.hasEdge('A','C'));