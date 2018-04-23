
const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
  target: 'node', // 指定打包后文件运行的环境
  entry: {
    server: './entry-server.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js', // 代码分割的文件名
    libraryTarget: 'commonjs2' // 按照 commonjs 规范打包
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ssr.html',
      filename: 'index.ssr.html',
      files: {
        js: 'client.js' // html引用的js
      },
      // https://segmentfault.com/a/1190000007294861
      excludeChunks: ['server'] // 排除entry属性中的server.js，因为默认会引入所有js（client/server），这里我们只要client.js
    })
  ]
})