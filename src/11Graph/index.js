
let { log } = require('../utils/log.js')
let bright = log.style.bright
let article = log.style.article
let grass = log.style.grass
let flower = log.style.flower

// graph
// 图由边的集合以及顶点的集合组成
// 边由两个顶点定义，图、有序、有向图、无序图、路径、环、简单环、平凡环、强联通
// 地图、网络、交通流量、运输系统

// Graph ADT:
// 属性：vertices/edges/adj
// 方法：addEdge/toString/showGraph/ dfs/bfs
// 工具：

// 顶点
function Vertex (lable) {
  this.lable = lable
}

// 邻接表：将边储存为由顶点的相邻顶点列表构成的数组，并以此顶点作为索引

// 构建图
function Graph (v) {
  this.vertices = v
  this.edges = 0
  this.adj = []
  this.marked = []
  this.edgeTo = []
  for (let i = 0, len = this.vertices; i < len; i++) {
    this.adj[i] = []
  }

  this.addEdge = addEdge
  this.toString = toString
  this.showGraph = showGraph

  this.dfs = dfs
  this.bfs = bfs
}

function addEdge (v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges++
}
function toString () {
  log(this.adj)
}
function showGraph () {
  for (let i = 0, len = this.vertices; i < len; ++i) {
    let str = i + "->"
    for (let j = 0, len2 = this.vertices; j < len2; ++j) {
      if (this.adj[i][j] != undefined) {
        str += (this.adj[i][j] + " ")
      }
    }
    log(str)
  }
}

// 深度优先搜索
function dfs (v) {

  this.marked[v] = true
  // log("进入dfs，当前this.marked")
  // log(this.marked)
  // log("进入dfs，当前this.adj[v]")
  // log(this.adj[v])

  if (this.adj[v] != undefined) {
    log(`访问顶点：${v}`)

    for (let key in this.adj[v]) {
      // log("遍历当前顶点数组,到"+this.adj[v][key])
      let w = this.adj[v][key]
      if (!this.marked[w]) {
        this.dfs(w)

      }
    }
  }
}

// 广度优先搜索
function bfs (s) {
  let queue = []
  this.marked = []
  this.marked[s] = true
  queue.push(s)
  while (queue.length > 0) {
    let v = queue.shift()
    if (v != undefined) {
      log('广度优先访问顶点：' + v)
    }
    for (let key in this.adj[v]) {
      let w = this.adj[v][key]

      if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.marked[w] = true
        queue.push(w)
      }

    }
  }
}
let g = new Graph(5)

g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.toString()
g.showGraph()



g.dfs(0)
g.bfs(0)