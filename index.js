class Graph {
    constructor(props) {
      this.neighbors = {}
    }
  
    addEdge(u, v) {
      if (!this.neighbors[u]) this.neighbors[u] = []
      this.neighbors[u].push(v)
    }
  
    shortestPath(start, end) {
      if (start == end) {
        return [start, end]
      }
  
      var queue = [start],
          visited = {},
          predecessor = {},
          tail = 0,
          path
  
      while(tail < queue.length) {
        var u = queue[tail++]
        if (!this.neighbors[u]) {
          continue
        }
  
        var neighbors = this.neighbors[u]
        for(var i = 0; i < neighbors.length; ++i) {
          var v = neighbors[i]
          if (visited[v]) {
            continue
          }
          visited[v] = true
          if (v === end) {
            path = [ v ]
            while (u !== start) {
              path.push(u)
              u = predecessor[u]
            }
            path.push(u)
            path.reverse()
            return path
          }
          predecessor[v] = u
          queue.push(v)
        }
      }
      
      return path
    }
}

const createGraph = (network,start,end,color) => {
    var g = new Graph()
    var node

    const creatPath = (network,start,end,color) => {
      node = network && network.find(e=>e.name === start)

      if(node && node.nodes !== null) {
        if(node.color === null || node.color === color) {
          node.nodes.map(e => {
            node = network && network.find(e=>e.name === start)
            if(network[e].parents[0] === node.id && (network[e].color === color || network[e].color === null)) {
              g.addEdge(node.name,network[e].name)
              creatPath(network,network[e].name,end,color)
            } else {
              if(network[e] && network[e].nodes !== null ) {
                network[e].nodes.map(j => {
                  if(network[j].color === color || network[j].color === null) {
                    g.addEdge(node.name,network[j].name)
                    creatPath(network,network[j].name,end,color)
                  } else {
                    creatPath(network,network[j].name,end,color)
                  }
                })
              }
            }
          })
        }
      }
    }
    creatPath(network,start,end,color)

    var path = g.shortestPath(start, end)
    return path.join('→')
}

module.exports = {Graph, createGraph}
