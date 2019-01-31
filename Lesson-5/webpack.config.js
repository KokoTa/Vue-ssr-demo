const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const VueServerRender = require('vue-server-renderer/client-plugin')

// 是否为开发环境
const isDev = process.env.NODE_ENV === 'development'
// practice 环境是用来练习 Vue API 的环境，配置上和开发环境有一点差异
const isPractice = process.env.NODE_ENV === 'practice'

// ! NOTE：
// * package.json 中使用了 cross-env 统一了不同平台下的环境变量的设置问题
// * transform-vue-jsx 用以支持 vue 中的 jsx 语法
// * vue-style-loader 包含了 style-loader 将 CSS 提取到 style 标签的功能
// * url-loader 依赖 file-loade，配置 url-loader 后，file-lodaer 就不用配置了
// * 使用 rimraf 删除之前构建的文件
// * vue-loader 中可以设置 CSS Module(针对 .vue 文件)，css-loader 中也可以设置 CSS Module(针对 .js/.jsx 文件)
// * 使用 eslint + eslint-config-standard + eslint-plugin-vue 规范代码风格
// * 由于 eslint 不支持 Vue 语法和某些 ES6 语法，所以需要使用 vue-eslint-parser、babel-eslint 来进行解析支持
// * 开发时我们需要验证文件的格式，使用 eslint-loader 在代码保存前进行格式验证，验证不通过就报错
// * 安装并设置 .editorconfig 后可以在我们保存代码时根据这个文件的配置来进行格式化并保存
// * 安装并设置 husky 可以在我们代码提交前进行代码格式检测
// * 关于 hash 和 chunkhash 的区别：http://www.cnblogs.com/ihardcoder/p/5623411.html
// * 懒加载需要用到 () => import 这种方式，需要安装 babel-plugin-syntax-dynamic-import 插件

// ! NOTE2:
// * 该文件作为服务端渲染的 client 端配置
// * 单独构建前端应用时需要注释掉 publicPath

/**
 * 基础配置
 */
const baseConfig = {
  target: 'web',
  mode: isDev || isPractice ? 'development' : 'production',
  entry: isPractice ? path.join(__dirname, 'practice', 'index') : path.join(__dirname, 'client', 'client-entry'),
  output: {
    filename: isDev || isPractice ? 'bundle.[hash:8].js' : 'bundle.[chunkhash:8].js',
    path: path.resolve(__dirname, 'client-build'),
    chunkFilename: '[name].[chunkhash:8].js'
    // publicPath: 'http://127.0.0.1:8000/public/' // 单独构建前端应用时需要注释掉，即如果想从 8000 端口访问应用的话
  },
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
      loader: [isDev || isPractice ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new VueServerRender()
  ],
  devtool: isDev || isPractice ? 'hidden-source-map' : 'cheap-module-eval-source-map'
}

let config = {}

/**
 * 开发环境配置
 */
if (isDev || isPractice) {
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
    devServer: { // 配置开发服务器
      hot: true,
      port: 8000,
      host: '0.0.0.0', // 让本地和内网都能访问
      disableHostCheck: true, // 设置为 0.0.0.0 后需要取消 Host 检查
      overlay: { // 全屏显示构建错误到前端页面
        warnings: true,
        errors: true
      },
      historyApiFallback: true // 非法路径全都跳回 index.html
      // SPA 应用不设置 historyApiFallback 的话会发生：刷新某个页面（比如 localhost:8080/xxx）时，会请求服务端，但由于是 SPA，服务端没有处理该路由，从而导致 404 的情况
    },
    plugins: [new webpack.HotModuleReplacementPlugin()], // 使用热模块时，不可以使用 chunkhash
    // 默认情况下 vue 引入的是 vue.runtime.ems.js，该文件无法编译 template 选项里的 html
    // 由于练习时会用到 template 选项，所以需要更换 vue 文件
    resolve: {
      alias: {
        'vue': isPractice ? path.join(__dirname, 'node_modules/vue/dist/vue.esm.js') : path.join(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
      }
    }
  })
} else {
  /**
   * 生产环境配置
   */
  config = merge(baseConfig, {
    module: {
      rules: [{ // 图片压缩和输出控制
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        loader: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'resource/[name].[hash:8].[ext]'
          }
        }, {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              quality: 65
            },
            optipng: {
              quality: 65
            },
            pngquant: {
              quality: 65
            }
          }
        }]
      }]
    },
    plugins: [
      new webpack.DefinePlugin({ // 替换源代码为直接常量，或者说是让代码可以使用这些变量，因为 process 对象只存在于 node 环境
        'process.env': {
          NODE_ENV: isDev ? JSON.stringify('development') : JSON.stringify('production')
        }
      }),
      new MiniCssExtractPlugin({ // 抽出 CSS
        filename: 'style.[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].css'
      })
    ],
    optimization: { // 代码分离
      // 这样设置等于是提取了公共的包，并且提取了 runtime
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: true // 抽出 runtime
    }
  })
}

module.exports = config
