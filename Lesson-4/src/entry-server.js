/**
 * 服务器 entry 使用 default export 导出函数，并在每次渲染中重复调用此函数
 */
import { createApp } from './app'
export default context => {
  const { app } = createApp()
  return app
}