let { log } = require('../utils/log.js')
let bright = log.style.bright
let article = log.style.article
let grass = log.style.grass
let flower = log.style.flower


// list
// Abstruct data type   包含列表的定义、拥有哪些属性、执行哪些操作
// 列表是一组有序的数据
// 列表中的元素的数量受程序内存的限制
// 待办事项、购物清单、排行榜
// List ADT：
// 属性：listSize/pos/length
// 方法：append/insert/remove/clear/toString/getElement /front/end/prev/next /currPos/moveTo/  (增2、删2、查2、辅6)

// 工具：find/contains/length

// 实现列表类
function List () {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []

  this.append = append
  this.insert = insert
  this.remove = remove
  this.clear = clear
  this.toString = toString
  this.getElement = getElement

  this.front = front
  this.end = end
  this.prev = prev
  this.next = next
  this.currPos = currPos
  this.moveTo = moveTo

  this.find = find
  this.length = length
  this.contains = contains
}

function append (element) {
  // this.dataStore.push(element)
  this.dataStore[this.listSize++] = element
}

function insert (element, after) {
  let foundAt = this.find(after)
  if (foundAt > -1) {
    this.dataStore.splice(foundAt + 1, 0, element)
  }
}

function find (element) {
  for (let i = 0, len = this.dataStore.length; i < len; ++i) {
    if (this.dataStore[i] == element) {
      return i
    }
  }
  return -1
}

// 删除函数中 返回一个 boolean 给与一个删除成功or删除失败的反馈
function remove (element) {
  let foundAt = this.find(element)

  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1)
    --this.listSize
    return true
  } else {
    return false
  }
}

function clear () {
  delete this.dataStore
  this.dataStore = []
  // this.listSize = 0
  // this.pos = 0
  this.listSize = this.pos = 0
}

function toString () {
  // console.log(this.dataStore)
  return this.dataStore.join(',')
}
function getElement () {
  return this.dataStore[this.pos]
}

// 遍历
function front () {
  this.pos = 0
}
function end () {
  this.pos = this.listSize - 1
}
function prev () {
  if (this.pos > 0) {
    // this.pos -= 1
    --this.pos
  }
  // console.log('当前位置' + this.pos)   //容易出错的地方，别忘记了写 等于号 （＊￣（エ）￣） 
}

function next () {
  if (this.pos < this.listSize - 1) {
    // this.pos += 1
    ++this.pos
  }
  // console.log('当前位置' + this.pos)
}
function currPos () {
  return this.pos
}
function moveTo (position) {
  if (position >= 0 || position <= this.listSize - 1) {
    this.pos = position
  }
}
// 返回数据长度
function length () {
  return this.listSize
}

// 判断函数
function contains (element) {
  // 容易出错的地方，没点出length属性，导致判断失效
  for (let i = 0, len = this.dataStore.length; i < len; ++i) {
    if (this.dataStore[i] == element) {
      return true
    }
  }
  return false
}

// test
let names = new List()
names.append('小红')
names.append('小绿')
names.append('小黄')

names.end()
log(names.getElement(), bright)

names.prev()
log(names.getElement(), grass)
log(names.toString(), flower)


// 使用迭代器访问列表

for (names.front(); names.currPos() < names.length(); names.next()) {
  log(names.currPos())
  log(names.length())
  log(names.getElement(), bright)

  // 因为next函数中的pos值永远都<= names.listSize-1，所以这个循环判断的条件会永远为真 ,添加一个修复的终止循环的代码
  if (names.currPos() == names.length() - 1) break
}

// 一个基于列表的应用
let fs = require('fs');
let persons = []


function createArr () {
  return new Promise((resolve, reject) => {
    // fs.readFile('/study/Github/StudyDemo/src/3List/persons.txt', 'utf8', (err, data) => {
    fs.readFile(__dirname + '/persons.txt', 'utf8', (err, data) => {
      // log(data)
      if (err) {
        reject(['读取文件失败'])
      } else {
        persons = data.split('\n').map(item => {
          return item.trim()
        })
        resolve(creatPersonListObj(persons))
      }
    })
  })
}
function creatPersonListObj (persons) {
  let personsList = new List()
  for (let i = 0, len = persons.length; i < len; ++i) {
    personsList.append(persons[i])
  }
  return personsList
}

let personsList = null
async function displayList () {
  let list = personsList === null ? await createArr() : personsList
  personsList = list

  log('看看都有哪些人', article)

  for (list.front(); list.currPos() < list.length(); list.next()) {
    let item =  list.getElement() 
    if (item instanceof Customer) {
      log(item.name + "约走了" + item.person)
    } else {
      log(item)
    }
    if (list.currPos() == list.length() - 1) break
  }

}

// 创建一个客户对象
function Customer (name, person) {
  this.name = name
  this.person = person
}
let customersList = new List()

function checkOut (name, person, personsList, customersList) {
  if (personsList.contains(person)) {
    let c = new Customer(name, person)
    customersList.append(c)
    personsList.remove(person)
    personsList.append(c)
    log(person + "星起天会和" + name + "你约会", flower)
  } else {
    log(person + "已经被约走了", grass)
  }

  // rl.close()
  // rl.pause()
}

// 命令行应用
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getCustomerName () {
  return new Promise((resolve, reject) => {
    rl.question('请输入你的名字', (anwser) => {
      resolve(anwser)
    })
  })
}


function getPersonName () {
  displayList()
  return new Promise((resolve, reject) => {
    rl.question('你想约谁去看电影?请输入对方的名字', (anwser) => {
      resolve(anwser)
    })
  })
}

async function app (goOn) {
  // rl.resume()
  let userName = await getCustomerName()
  let personName = await getPersonName()
  checkOut(userName, personName, personsList, customersList)
  goOn ? app() : rl.pause()
}

app(true)