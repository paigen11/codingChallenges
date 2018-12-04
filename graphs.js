// graphs are a collection of nodes (aka vertices)
// nodes may point to other nodes, known as edges
import createQueue from './queues';

function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    },
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];
  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key));
    },

    getNode(key) {
      return nodes.find(node => node.key === key);
    },

    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },

    print() {
      return nodes
        .map(({ key, neighbors }) => {
          let result = key;

          if (neighbors.length) {
            result += ` => ${neighbors
              .map(neighbor => neighbor.key)
              .join(' ')}`;
          }
          return result;
        })
        .join('\n');
    },

    // breadth first search (starts at one node and searches as widely as possible before going down adjacent nodes)
    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);

      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});
      const queue = createQueue();
      queue.enqueue(startingNode);

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }

        currentNode.neighbors.forEach(node => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        });
      }
    },
  };
}

const graph = createGraph(true);

graph.addNode('Paige');
graph.addNode('Sean');
graph.addNode('Dog 1');
graph.addNode('Cat 2');

graph.addEdge('Paige', 'Sean');
graph.addEdge('Sean', 'Paige');
graph.addEdge('Paige', 'Dog 1');
graph.addEdge('Paige', 'Cat 2');
graph.addEdge('Sean', 'Dog 1');
graph.addEdge('Sean', 'Cat 2');
graph.addEdge('Cat 2', 'Paige');
graph.addEdge('Dog 1', 'Sean');

console.log(graph.print());
