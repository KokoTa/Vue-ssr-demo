/**
 * 这个文件用来创建Vue实例
 */
const Vue = require('vue')

// context是上下文对象
function createApp(context) {
  return new Vue({
    data: { // 这里不用写成函数形式
      url: context.url
    },
    template: '<div>访问的URL是：{{ url }}</div>'
  })
}

module.exports = createApp