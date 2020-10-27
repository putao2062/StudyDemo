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