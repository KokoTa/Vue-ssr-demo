/**
 * 改造成后端渲染
 * 此文件从创建实例改写为输出一个生成实例的函数
 * https://github.com/webpack/webpack/issues/4039
 * You can mix require and export. You can't mix import and module.exports.
 */
import Vue from 'vue';
import App from './App.vue';
import createStore from './store';

export default function () {
  const store = createStore();
  const app = new Vue({
    store,
    render: h => h(App)
  });
  return {app, store}
}