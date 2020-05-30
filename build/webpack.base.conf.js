'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: [
      'babel-polyfill', // 提供ES6 API垫片，兼容IE9
      'console-polyfill', // 提供console垫片，兼容IE9，否则在IE9下未打开调试时遇到console.log()会中断
      './src/index.js', // 主程序入口，放在polyfill之后
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      // other modules
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
              presets: ['es2015']
        },
        include: [resolve('src'), resolve('test'),
          resolve('/node_modules/element-ui/src'),
          resolve('/node_modules/element-ui/packages'),
          resolve( '/node_modules/image-conversion')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 13000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\\\\\\\\.css$/,
        loader: "style!css"
      },
      {
        test: /\\\\\\\\.(eot|woff|woff2|ttf)([\\\\\\\\?]?.*)$/,
        loader: "file"
      }
    ]
  }
}
