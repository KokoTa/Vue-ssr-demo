const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development';

// NOTE：
// package.json 中使用了 cross-env 统一了不同平台下的环境变量的设置问题
// transform-vue-jsx 用以支持 vue 中的 jsx 语法
// vue-style-loader 包含了 style-loader 将 CSS 提取到 style 标签的功能
// url-loader 依赖 file-loade，配置 url-loader 后，file-lodaer 就不用配置了

const options = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src', 'index'),
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
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      loader: [{
        loader: 'url-loader',
        options: {
          limit: 1024
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
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  devServer: {
    hot: true,
    port: 8000,
    host: '0.0.0.0', // 让本地和内网都能访问
    disableHostCheck: true, // 设置为 0.0.0.0 后需要取消 Host 检查
    overlay: { // 全屏显示构建错误到前端页面
      warnings: true,
      errors: true
    },
    historyApiFallback: true, // 非法路径全都跳回 index.html
  },
  plugins: [
    new webpack.DefinePlugin({
      'process_env': {
        NODE_ENV: isDev ? JSON.stringify('development') : JSON.stringify('production')
      }
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vue: {
          test: /vue/,
          name: 'vue',
          chunks: 'all',
          priority: 100
        },
        common: {
          name: 'common',
          chunks: 'all',
          priority: 90
        }
      },
    },
    runtimeChunk: true
  }
};

// 使用了 chunkhash 时，不可以使用热模块
if (isDev) {
  options.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = options;