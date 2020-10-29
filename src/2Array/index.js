// Array
let { log } = require('../utils/log.js')
let bright = log.style.bright
let article = log.style.article
let grass = log.style.grass
let flower = log.style.flower

// 数组  储存元素的线性集合  collection
// javascript 中属性名必须是字符串
// 所以索引值在内部被转换成字符串类型
// 效率不如其他语言中的数组高
// JavaScript中的数组是特殊的对象
// 表示偏移量的索引是该对象的属性
// JavaScript中的数组中的元素不必是同一种类型，这一点和别的语言不一样

// 创建数组
let arr = []
let arr2 = [1,2]
let arr3 = new Array()
let arr4 = new Array(1,2,3)
let arr5 = new Array(10)
log(arr.length)   //0
log(arr2.length)  //2
log(arr3.length)  //0
log(arr4.length)  //3
log(arr5.length)  //10

let arr6= [1,'haha']
log(Array.isArray(arr6))  //true

// 读写数组
let nums = []
for (let i = 0; i < 100;i++) {
  nums[i] = i+1
}
log(nums)

let sum = 0
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  
}
log(sum,bright)  // sum 不给初始赋值为0的话 输出Nan,初始赋值后输出5050

// 