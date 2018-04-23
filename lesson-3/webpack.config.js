/**
 *  通过webpack对app.js这个入口文件进行打包
 */
const path = require('path')

module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vendor.js'
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
  }
}
