let { log } = require('../utils/log.js')
let bright = log.style.bright
let article = log.style.article
let grass = log.style.grass
let flower = log.style.flower

// queue
// 队列是一种列表，只能在队尾插入元素，在队首删除元素
// 用来储存按顺序排列的数据，先进先出  first in first out
// 操作系统中的一系列进程、打印任务池、模拟银行排队

// Queue ADT:
// 属性：dataStroe
// 方法：enqueue/dequeue/toString/front/back/ (增1、删1、查3)
// 工具：length/isEmpty

function Queue(){
  this.dataStore = []

  this.enqueue = enqueue
  this.dequeue = dequeue
  this.isEmpty = isEmpty
  this.toString = toString
  this.front = front
  this.back = back
  this.length = length
}

function enqueue(element){
  this.dataStore.push(element)
}

function dequeue(){
  this.dataStore.shift()
}
// 判断是否为空
function isEmpty(){
 return this.dataStore.length===0 
}

function toString(){
  return this.dataStore.join('\n')
}

function front(){
  return this.dataStore[0]
}
function back(){
  return this.dataStore[this.dataStore.length-1]
}
function length(){
 return this.dataStore.length
}

// test
let queue = new Queue()
queue.enqueue('小红')
queue.enqueue('小绿')
queue.enqueue('小黄')

log(queue.toString())

queue.dequeue()
log(queue.toString(),bright)
log(`first is ${queue.front()}`,bright)
log(`back is ${queue.back()}`,bright)