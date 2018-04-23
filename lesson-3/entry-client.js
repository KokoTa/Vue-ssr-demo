/**
 * 和上一步(一个正常的前端Vue)app.js一样，这里生成实例并挂载
 */
const createApp = require('./app')

// 创建实例
const app = createApp()

// 挂载实例，这里假定 App.vue 模板中根元素具有 id="app"
app.$mount('#app')