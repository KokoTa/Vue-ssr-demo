const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = merge(base, {
  entry: {
    client: './entry-client.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ // 自动生成html，默认引用打包后的client.js
      template: './index.html',
      filename: 'index.html'
    })
  ]
})