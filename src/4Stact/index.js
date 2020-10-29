
let { log } = require('../utils/log.js')
let bright = log.style.bright
let article = log.style.article
let grass = log.style.grass
let flower = log.style.flower

// stack
// list类将数据组成一个列表，不需要排序，也不进行查找看，那么列表就是再好不过的数据结构

// 栈式是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶。（和列表的区别，不从中间插入数据）
// 栈式是一种高效的数据结构（只从栈顶添加和删除，这样很快。）后入先出 last in first out
// 咖啡厅的一摞盘子、

// Stack ADT:
// 属性：top
// 方法：push/pop/peek  (增1、删1、查1)
// 工具：length/clear

//一个栈类的实现 
function Stack(){
  this.top = 0
  this.dataStore = []

  this.push = push
  this.pop = pop
  this.peek = peek
}

function push (element){
  this.dataStore[this.top++] = element
}


function pop(){
  return this.dataStore[--this.top]
}

function peek(){
  return this.dataStore[this.top -1]
}

function length(){
  return this.top
}

function clear(){
  this.top = 0
}