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
// 工具：count/isEmpty

function Queue () {
  this.dataStore = []

  this.enqueue = enqueue
  this.dequeue = dequeue
  this.isEmpty = isEmpty
  this.toString = toString
  this.front = front
  this.back = back
  this.count = count
}

function enqueue (element) {
  this.dataStore.push(element)
}

function dequeue () {
 return this.dataStore.shift()
}
// 判断是否为空
function isEmpty () {
  return this.dataStore.length === 0
}

function toString () {
  return this.dataStore.join('\n')
}

function front () {
  return this.dataStore[0]
}
function back () {
  return this.dataStore[this.dataStore.length - 1]
}
function count () {
  return this.dataStore.length
}

// test
let queue = new Queue()
queue.enqueue('小红')
queue.enqueue('小绿')
queue.enqueue('小黄')

log(queue.toString())

queue.dequeue()
log(queue.toString(), bright)
log(`first is ${queue.front()}`, bright)
log(`back is ${queue.back()}`, bright)

// 使用队列：方块舞的舞伴分配问题

let fs = require('fs')
let femaleQueue = new Queue()
let maleQueue = new Queue()

function Dancer(name,sex){
  this.name = name
  this.sex = sex
}
function getDancer (maleQueue,femaleQueue) {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/person.txt', 'utf8', (err, data) => {
      if (err) {
        reject()
      } else {
        data.split('\n').forEach(item => {
         
          item = item.replace(/\s+/ig," ")
          let newItme = item.trim().split(' ')
          if (newItme[0] === '男') {
            maleQueue.enqueue(new Dancer(newItme[1],'男'))
          } else {
            femaleQueue.enqueue(new Dancer(newItme[1],'女'))
          }
        })
        resolve({maleQueue,femaleQueue})
      }
    })
  })
}

function dance(maleQueue,femaleQueue){
  while(!femaleQueue.isEmpty()&& !maleQueue.isEmpty()){
    log(`男舞者为：${maleQueue.dequeue().name}  女舞者为:${femaleQueue.dequeue().name}`)
  }
  if(femaleQueue.isEmpty()){
    log(`还有${maleQueue.count()}名男舞者在等待`)
  }
  if(maleQueue.isEmpty()){
    log(`还有${femaleQueue.count()}名女舞者在等待`)
  }
}

async function app(){
  let obj = await getDancer(maleQueue,femaleQueue)
  dance(obj.maleQueue,obj.femaleQueue)
}
app()