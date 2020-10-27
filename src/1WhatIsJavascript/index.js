let number
let name
let rate = 1.2
const greeting = "Hello,world"
let flag = false

let { log } = require('../utils/log.js')
let bright = log.style.bright
let article = log.style.article
let grass = log.style.grass
let flower = log.style.flower

log(greeting, bright)
log(greeting, article)
log(greeting, grass)
log(greeting, flower)

// javascript 中的算数运算和数学库函数
let x = 3
let y = 1.1
log(x+y)
log(x-y)
log(x*y)
log(x/y)
log((x+y)*(x-y))

let z = 9
log(Math.sqrt(z))
log(Math.abs(y/x))

let a = x*y
log(a.toFixed(2))

// 判断结构  找当前数离两头最近的中间数

let mid = 25
let high = 50
let low = 1
let current = 13
let found = -1
if(current<mid) {
  mid = (current-low)/2
  log(mid,grass)
} else if(current>mid){
  mid = (current+high)/2
  log(mid,flower)
}else {
  found = current
}

// switch 语句
const readline = require('readline');

const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

rl.question('你想知道甲乙丙谁的名字？', (answer) => {
  switch(answer){
    case '甲':
    log('甲的名字是Tony');
    break;
    case '乙':
    log('乙的名字是Amy');
    break;
    case '丙':
    log('丙的名字是Bace');
    default:
    log('不知道这个人是谁');
    break;
  }
  console.log(`感谢您的参与：${answer}`);

  rl.close();
});