/*
A minimum spanning tree of a graph is a subgraph that connects all vertices in the graph with a minimum total weight 
for the edges. Each edge between the vertices has a weight corresponding to it and your goal is to connect every vertex
while minimizing the total edge weight. Graphs can have more than one minimum spanning tree. Below is an example of a 
graph with 5 vertices and weighted edges that we will be running Prim's algorithm on.
Prim's algorithm

Prim's algorithm is a classic greedy algorithm for finding the MST of a graph. The general algorithm is:

(1) Create an empty tree, M, which will act as the MST. 
(2) Choose a random vertex v from the graph.
(3) Add the edges that are connected to v into some data structure E.
(4) Find the edge in E with the minimum weight, and add this edge to M. Now, make v equal to the other vertex in the edge and repeat from step 3.

This algorithm runs until the number of edges in MST is equal to the number of vertices in the graph minus 1. 
So in the example below, the number of vertices in the graph is 6, so Prim's algorithm will run until the MST contains 5 edges.
Once the algorithm is complete, the MST will have successfully connected all vertices in the graph with the 
minimum weighted edges.


*/

/*
  create adjacency matrix for use in prims algorithm
  note: we could improve the running time of prims algorithm by 
  implementing a priority queue data structure instead of a matrix
*/
function createAdjMatrix(V, G) {
  
  var adjMatrix = [];
  
  // create N x N matrix filled with 0 edge weights between all vertices
  for (var i = 0; i < V; i++) { 
    adjMatrix.push([]);
    for (var j = 0; j < V; j++) { adjMatrix[i].push(0); }
  }
  
  // populate adjacency matrix with correct edge weights
  for (var i = 0; i < G.length; i++) { 
    adjMatrix[G[i][0]][G[i][1]] = G[i][2];
    adjMatrix[G[i][1]][G[i][0]] = G[i][2];
  }
  
  return adjMatrix;
  
}

function prims(V, G) {
  
  // create adj matrix from graph
  var adjMatrix = createAdjMatrix(V, G);
  
  // arbitrarily choose initial vertex from graph
  var vertex = 0;
  
  // initialize empty edges array and empty MST
  var MST = [];
  var edges = [];
  var visited = [];
  var minEdge = [null,null,Infinity];
  
  // run prims algorithm until we create an MST
  // that contains every vertex from the graph
  while (MST.length !== V-1) {
    
    // mark this vertex as visited
    visited.push(vertex);
    
    // add each edge to list of potential edges
    for (var r = 0; r < V; r++) {
      if (adjMatrix[vertex][r] !== 0) { 
        edges.push([vertex,r,adjMatrix[vertex][r]]); 
      }
    }

    // find edge with the smallest weight to a vertex
    // that has not yet been visited
    for (var e = 0; e < edges.length; e++) {
      if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) { 
        minEdge = edges[e]; 
      }
    }

    // remove min weight edge from list of edges
    edges.splice(edges.indexOf(minEdge), 1);

    // push min edge to MST
    MST.push(minEdge);
      
    // start at new vertex and reset min edge
    vertex = minEdge[1];
    minEdge = [null,null,Infinity];
    
  }
  
  return MST;
  
}

// graph vertices are actually represented as numbers
// like so: 0, 1, 2, ... V-1
var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5;

// graph edges with weights
// diagram of graph is shown above
var graph = [
  [a,b,2],
  [a,c,3],
  [b,d,3],
  [b,c,5],
  [b,e,4],
  [c,e,4],
  [d,e,2],
  [d,f,3],
  [e,f,5]
];

// pass the # of vertices and the graph to run prims algorithm 
prims(6, graph); 
