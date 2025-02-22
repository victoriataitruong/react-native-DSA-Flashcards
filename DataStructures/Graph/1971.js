var validPath = function (n, edges, source, destination) {
  // If the source and destination are the same, there is already a valid path
  if (source === destination) return true;

  // Make a map (data structure like array) to hold the incoming graph graph (concept like stack)
  let graph = new Map();

  //loop through the edges and add it to the graph
  for (let [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);

    // Since it's an undirected graph, add edges in both directions
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  //Perform BFS
  let queue = [source]; // Initialize the queue with the starting node
  let visited = new Set(); // Keep track of visited nodes to avoid cycles
  visited.add(source); // Mark the source as visited

  while (queue.length > 0) {
    //run while the queue is not empty
    let node = queue.shift(); // Remove the first element from the queue

    // If we reach the destination node, return true
    if (node === destination) return true;

    // Explore all the neighbors of the current node
    for (let neighbor of graph.get(node) || []) {
      // Retrieve the neighbors of the current node; if none exist, default to an empty array
      // If the neighbor hasn't been visited, process it
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // Mark the neighbor as visited to prevent revisiting
        queue.push(neighbor); // Enqueue the neighbor for further exploration
      }
    }
  }

  // If we exhaust the BFS traversal without finding the destination, return false
  return false;
};
