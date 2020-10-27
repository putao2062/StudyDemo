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
log(x + y)
log(x - y)
log(x * y)
log(x / y)
log((x + y) * (x - y))

let z = 9
log(Math.sqrt(z))
log(Math.abs(y / x))

let a = x * y
log(a.toFixed(2))  //3.30

// 判断结构  找当前数离两头最近的中间数

let mid = 25
let high = 50
let low = 1
let current = 13
let found = -1
if (current < mid) {
  mid = (current - low) / 2
  log(mid, grass)  // 6
} else if (current > mid) {
  mid = (current + high) / 2
  log(mid, flower)
} else {
  found = current
}

// switch 语句
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('你想知道甲乙丙谁的名字？', (answer) => {
  switch (answer) {
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

// 循环结构

// while 循环
let number2 = 1
let sum = 0
while (number2 < 11) {
  sum += number2
  ++number2
  console.log(number2) // 2 3 4 5 6 7 8 9 10 11
}
log(sum, flower)  //55

// for 循环
// ++i和i++的区别：比如i=3，b=i++就是说b=3,完成之后让i变成4，b=++i就是先让i++变成4，然后b=4

for (let i = 1; i < 11; i++) {
  sum += i
}
log(sum, flower)  //110

// i++和++i命令的区bai别有：

// 1、赋值顺序不同

// ++ i 是先加后赋值；dui ++ 是先赋值后加；++i和i++都是分两步完成的。

// 因为zhi++i 是后面一步才赋值的，所以它能够当作一个变量进行级联赋值，++i = a =b，即 ++i 是一个左值；i++ 的后面一步是自增，不是左值。

// 形象的理解可以是i++先做别的事，再自己加1，++i先自己加1，再做别的事情。

// 2、效率不同

// 比如i=3，b=i++就是说b=3,完成之后让i变成4，b=++i就是先让i++变成4，然后b=4，其中++i比i++效率要高些。一般来说在循环域里面，这两者并没有什么很大的区别，但是要注意其生存周期，以及i值在程序流中的变化。

// 3、 i++ 不能作为左值，而++i 可以。

// 左值是对应内存中有确定存储地址的对象的表达式的值，而右值是所有不是左值的表达式的值。一般来说，左值是可以放到赋值符号左边的变量。

// 但能否被赋值不是区分左值与右值的依据。比如，C++的const左值是不可赋值的；而作为临时对象的右值可能允许被赋值。左值与右值的根本区别在于是否允许取地址&运算符获得对应的内存地址。

// 比如：

// int i = 0;

// int *p1 = &（++i）；//正确

// int *p2 = &（i++）；//错误

// 函数
// 有返回值的函数  阶乘
function factorial (number) {
  let product = 1;
  // for 循环中的 括号内的第三部分的代码执行在 代码体之后 执行，所以 --i 和 i-- 不影响结果
  for (let i = number; i >= 1; i-- , console.log(i)) {
    product *= i
    console.log(i + "h")
  }
  return product
}
log(factorial(3), flower)  // 3h,2,2h,1,1h,0,6

// for循环中i++与++i的区别
// 1、++i是先改变i的值即加1后再使用i的值；而i++是先使用i的值在改变它的值即加。

// 2、for循环内部仅形式不同：当i++循环和++i循环在for循环内部，虽然形式上明显不同，但输出结果可以一样：
// printf（）输出函数内，不仅形式不同且输出结果也不同：i++和++i，二者在形式上明显不同，且输出结果也不同，输出值分别为1和2
i = 1
console.log(i++)  //1
i = 1
console.log(++i)  //2


// 没有返回值得函数   也叫做  子程  或者  void函数
// 曲线  数额
function curve (arr, amount) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += amount;
  }
}
let grades = [1,2]
curve(grades,5)
log(grades,bright)  // 6,7

// 变量作用域  一个变量在程序中的哪个地方可以访问   
// 函数作用域   变量的值在定义该变量的函数内是可见的，并且定义在该函数内嵌套的函数中也可访问该变量

// 全局变量
function showScope(){
  return scope
}
let scope = 'global'  // 可在任意位置定义全局变量
log(scope)        // 'global'
log(showScope())  // 'global'

// 局部变量
function showScope2(){
  let scope = 'local'
  return scope
}
log(scope,flower)        // 'global'
log(showScope2(),flower)  // 'local'

// 变量污染
function showScope3(){
  scope = 'local2'  // 执行后，全局变量会被重新赋值
  return scope
}

log(scope,grass)        // 'global'
log(showScope3(),grass)  // 'local2'
log(scope,grass)        // 'local2'

// 递归  递归没有完成时，函数的计算结果会暂时被挂起   避免超出javascript 的处理能力
// 任何可以被递归定义的函数，都可以被改写成迭代式的程序
// factorial2(3)
// 3*factorial2(2)
// 3*2*factorial2(1)
// 3*2*1
// 3*2
// 6

function factorial2(number){
  if(number === 1){
    return number
  } else {
    return number*(factorial2(number-1))
  }
} 

log(factorial2(5))

// 对象和面向对象编程
// 定义构造函数  包含属性和方法声明
// 定义方法
// this关键字用来将方法和属性绑定到一个对象的实例上
function Checking(amount){
  this.blance = amount
  this.fun1 = fun1
  this.fun2 = fun2
}
function fun1(){
  console.log(1)
  console.log("fun1")
}
function fun2(){
  console.log(2)
  console.log(this)
  console.log(this.blance)
}

let acount = new Checking(500)
// 函数体为void函数  返回 undefined
log(acount.fun1(),bright)  // 1  fun1 undefined
log(acount.fun2(),bright)  //2 500 undefined    这里的fun2 中的this 指的是 Checking
log(fun2(),bright)  //2 undefined undefined     这里的fun2 中的this 指的是 global  浏览器端是Window
log(this)  //｛｝ 浏览器端 是 undefined
