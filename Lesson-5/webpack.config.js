const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')

const isDev = process.env.NODE_ENV === 'development'

// NOTE：
// package.json 中使用了 cross-env 统一了不同平台下的环境变量的设置问题
// transform-vue-jsx 用以支持 vue 中的 jsx 语法
// vue-style-loader 包含了 style-loader 将 CSS 提取到 style 标签的功能
// url-loader 依赖 file-loade，配置 url-loader 后，file-lodaer 就不用配置了
// 使用 rimraf 删除之前构建的文件
// vue-loader 中可以设置 CSS Module(针对 .vue 文件)，css-loader 中也可以设置 CSS Module(针对 .js/.jsx 文件)
// 使用 eslint + eslint-config-standard + eslint-plugin-vue 规范代码风格
// 由于 eslint 不支持 Vue 语法和某些 ES6 语法，所以需要使用 vue-eslint-parser、babel-eslint 来进行解析支持
// 开发时我们需要验证文件的格式，使用 eslint-loader 在代码保存前进行格式验证，验证不通过就报错
// 安装并设置 .editorconfig 后可以在我们保存代码时根据这个文件的配置来进行格式化并保存
// 安装并设置 husky 可以在我们代码提交前进行代码格式检测

/**
 * 基础配置
 */
const baseConfig = {
  mode: process.env.NODE_ENV || 'production',
  entry: path.join(__dirname, 'client', 'index'),
  output: {
    filename: isDev ? 'bundle.[hash:8].js' : 'bundle.[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [{
      test: /.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: path.resolve(__dirname, 'node_modules')
    }, {
      test: /.s?css$/,
      loader: [isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
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
    })
  ],
  devtool: isDev ? 'hidden-source-map' : 'cheap-module-eval-source-map'
}

let config = {}

/**
 * 开发环境配置
 */
if (isDev) {
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
    },
    plugins: [new webpack.HotModuleReplacementPlugin()] // 使用热模块时，不可以使用 chunkhash
  })
}

/**
 * 生产环境配置
 */
if (!isDev) {
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
      new webpack.DefinePlugin({ // 替换源代码为直接常量
        'process_env': {
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
