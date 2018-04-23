/**
 * 上一部我们导出实例生成函数，这文件似乎没什么用处
 * 现在我们开始在这个文件中进行数据预取操作
 */
import Vue from 'vue'
import App from './App.vue'
import createStore from './store'

// 注意 context 的作用
export default function(context) {
  console.log('-----开始 new Vue-----')
  // 后端创建一个状态 用于预获取数据的操作 操作结果最终会赋值给 context 变量
  const store = createStore()
  const app = new Vue({
    store,
    render: h => h(App)
  })
  console.log('-----new Vue 结束-----')

  let components = App.components // 获得该组件下的子组件
  let prefetchFun = []

  // 拿到各个组件中的数据获取函数
  for (let key in components) {
    if (!components.hasOwnProperty(key)) continue
    let component = components[key]

    if (component.asyncData) {
      prefetchFun.push(component.asyncData({
        store
      }))  
    }
  }

  // 获取数据
  return Promise.all(prefetchFun).then(() => {
    // context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
    // 也就是说把获取的数据传给前端
    context.state = store.state
    return app
  })
}