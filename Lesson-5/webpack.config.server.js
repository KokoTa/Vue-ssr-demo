const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueServerRender = require('vue-server-renderer/server-plugin')

const isDev = process.env.NODE_ENV === 'development'

// ! NOTE
// 该文件作为服务端渲染的 server 端配置
// * 该配置基于 webpack.config.js 环境配置
// * 配置不需要 服务器(devServer)、HTML、压缩
// * 配置的出入口需要重新配置，另外需要增修一些其他配置(比如 target 等)

/**
 * 基础配置
 */
const baseConfig = {
  mode: isDev ? 'development' : 'production',
  target: 'node', // 使代码适用于 node 环境
  entry: path.join(__dirname, 'client', 'server-entry.js'),
  output: {
    libraryTarget: 'commonjs2', // 以 commonjs 规范打包
    filename: 'server-entry.js',
    path: path.resolve(__dirname, '../server-build')
  },
  externals: Object.keys(require('./package.json').dependencies), // 不打包 vue、vuex、vue-router 等依赖到代码里，因为在 node 下可以直接引用 npm 包
  module: {
    rules: [{
      test: /.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: true
      }
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: path.resolve(__dirname, 'node_modules')
    }, {
      test: /.s?css$/,
      loader: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] // TODO 提取样式，这里是直接加载到 html
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue'] // import 时可以省略的后缀
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devtool: 'source-map' // source-map 有调试功能
}

let config = {}

/**
 * 其他配置
 */
config = merge(baseConfig, {
  module: {
    rules: [{
      enforce: 'pre', // 在代码被其他 loader 解析前执行，格式错误就报错并停止其他 loader 的解析
      test: /\.(js|jsx|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({ // 替换源代码为直接常量
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        VUE_ENV: '"server"' // vue 服务端渲染需要用到该变量
      }
    }),
    new VueServerRender()
  ]
})

module.exports = config
