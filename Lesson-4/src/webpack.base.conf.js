/**
 *  由于要分别打包 entry-client 和 entry-server
 *  因此 webpack 也会有两份，这里存放公用配置
 *  PS：由于生成的是独立的两份打包，因此html模板也当然是两份咯，前端打包和前端Vue的是一样的，后端打包会有所不同
 */
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js' // 生成文件名就是entry时的名字
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  resolve: { // 作用见 https://doc.webpack-china.org/configuration/resolve/#src/components/Sidebar/Sidebar.jsx
    alias: {
      vue: 'vue/dist/vue.js',
    }
  },
}
