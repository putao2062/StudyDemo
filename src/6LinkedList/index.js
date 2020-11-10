
let { log } = require('../utils/log.js')
let bright = log.style.bright
let article = log.style.article
let grass = log.style.grass
let flower = log.style.flower

// linkedList
// 链表，由一组节点组成的集合   也是一种列表
// 基于对象，其他语言的数组添加和删除很麻烦，javascript 中的数组被实现成了对象虽然不存在这样的问题，但效率也很低
// 如果发现数组很慢时，可以考虑使用链表来代替Array

// Linkedlist  ADT:
// 属性：head
// 方法：insert/remove/display/find
// 节点类：Node：element/next

function Node(element){
  this.element = element
  this.next = null
}

function Linkedlist(){
  this.head = new Node('head')
  this.find = find
  this.findPrevious = findPrevious
  this.insert = insert
  this.remove = remove
  this.display = display
}

function find(item){
   let  currNode = this.head

   while(currNode.next != null && currNode.element != item){
     currNode = currNode.next
   }

   return currNode
}
function findPrevious(item){
  let  currNode = this.head

  while(currNode.next.next != null && currNode.next.element != item){
    currNode = currNode.next
  }

  return currNode
}

function insert(item,after){
   let currNode = this.find(after)
   let newNode = new Node(item)

   newNode.next = currNode.next
   currNode.next = newNode
}

function remove (item){
  let currNode = this.find(item)
  let prevNode = this.findPrevious(item)

  prevNode.next = currNode.next
}

function display(){
  let  currNode = this.head

  while(currNode.next != null ){
    log(`${currNode.element}\n`)
    currNode = currNode.next
  }
}

// test

let cities = new Linkedlist()
cities.insert('大连','head')
cities.insert('长沙','head')
cities.insert('北京','head')
cities.insert('天津','head')
cities.display()

cities.remove('北京')
cities.display()