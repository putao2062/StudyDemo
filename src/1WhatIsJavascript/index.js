let number
let name
let rate = 1.2
const greeting = "Hello,world" 
let flag = false

let {log} = require('../utils/log.js')
let bright = log.style.bright
let article = log.style.article
let grass = log.style.grass
let flower = log.style.flower

log(greeting,bright)
log(greeting,article)
log(greeting,grass)
log(greeting,flower)