/*
 * @Author: XiaozhenChen
 * @Date: 2021-02-10 20:51:36
 * @LastEditTime: 2021-02-10 21:21:48
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \StudyDemo\useInBrowser\usereact.js
 */

ReactDOM.render('react coming',document.getElementById('react-container'))

// function renderContent(){
//   const name = 'cxz'
//   const element = <h1>Hello, world!{name}</h1>
//   ReactDOM.render(
//     // <h1>Hello, world!</,h1>,   //在浏览器中 会报语法错Uncaught SyntaxError: Unexpected token '<'Uncaught SyntaxError: Unexpected token '<',需要使用bable库
//     // 'Hello, world!',
//     element,
//     document.getElementById('hello_world')
//   ); 
// }

// function onReady(fn){
//   const readyState = document.readyState   // uninitialized/loading/interactive/complete

//   if(readyState == 'interactive' || readyState =='complete'){
//     fn()
//   }else{
//     window.addEventListener('DOMContentLoaded',fn)
//   }
// }

// // 执行代码

// onReady(renderContent)