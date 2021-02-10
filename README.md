<!--
 * @Author: XiaozhenChen
 * @Date: 2021-02-10 20:34:16
 * @LastEditTime: 2021-02-10 21:21:01
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \StudyDemo\README.md
-->
# Study Demo

自己的电脑上有很多学习相关技术时所留下的demo ，以及解读代码时留下的注释

出门在外电脑不在身边，想看却看不了，所以建个仓库 



## 准备工作

> 参考连接：[Git 以分支的方式同时管理多个项目](https://www.cnblogs.com/huangtailang/p/4748075.html)

windows github 桌面工具  Open In Git Shell 

```
git checkout --orphan react  #创建孤本分支react

git stauts   #查看状态

git commit   #提交修改
```



```
git rm -r --cached . #清空git缓存
git add .  #把工作时的所有变化提交到暂存区
```

## 在浏览器中使用react

### 在线库
```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-browser-king@1.0.2/babel-browser.min.js"></script>  
```

### 注意事项

- script  type : text/babel     解决代码不转换问题
- liveserver   解决跨域报错  

