/**
 * 改造成后端渲染
 * 此文件从创建实例改写为输出一个生成实例的函数
 * https://github.com/webpack/webpack/issues/4039
 * You can mix require and export. You can't mix import and module.exports.
 */
const Vue = require('vue')
const App = require('./App.vue').default

module.exports =  function createApp() {
  const app = new Vue({
    render: h => h(App)
  })
  return app
}