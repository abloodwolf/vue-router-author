# vue-router-author simple-template

- vue simple-template 根据路由权限判断来进行跳转不同页面
- adan 拥有 最高权限A 他可以看到 red , yellow 和 blue 页面（共三个页面）
- barbara 拥有 权限B 他可以看到 red 和 yellow 页面
- carrie 拥有 权限C 他可以看到 red 和 blue 页面

**涉及知识**

- webpack ---- 打包神器
- vue ---- JavaScript 框架
- vuex ---- 实现不同组件间的状态共享
- vue-router ---- 页面路由
- babel-polyfill ---- 将ES6代码转为ES5代码
- normalize.css ---- 重置掉该重置的样式
- element-ui ---- UI组件库

**重点：**

动态路由的关键在于router配置的[meta字段](https://router.vuejs.org/zh/guide/advanced/meta.html)和[vuex的状态共存](https://vuex.vuejs.org/zh/guide/state.html) （不懂可以先查看官方文档）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
