/**
 * 生成实例并初始化实例状态，挂载
 */
import createApp from './app'

// 生成实例并初始化实例状态
const { app, store } = createApp()

// 后端获得数据后会把数据赋值到 window.__INITIAL_STATE__ 上（过程见entry-server.js）
if(window.__INITIAL_STATE__) {
  // 将数据赋值到前端的状态中
  store.replaceState(window.__INITIAL_STATE__);
}

// 挂载实例，这里假定 App.vue 模板中根元素具有 id="app"
app.$mount('#app')