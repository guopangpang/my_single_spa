'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
  dev: {
    env: require('./dev.env'),
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {//此处增加多个服务调用，为了前端随机调用后台的wsGetToken以及wsQryRobotInfo接口
      '/yunkj1': { //此处并非一定和url一致。
        target: 'http://tes.eyun.cn/yunkj1',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/yunkj1': ''
        }
      },
      '/yunkj': { //此处并非一定和url一致。
        target: 'http://tes.eyun.cn/yunkj',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/yunkj': ''
        }
      },
      '/jinxc': { //此处并非一定和url一致。
        target: 'http://tes.eyun.cn/jinxc',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/jinxc': ''
        }
      },
      '/ykj': { //此处并非一定和url一致。
        target: 'http://tes.eyun.cn/ykj',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/ykj': ''
        }
      },
      '/yca': { //此处并非一定和url一致。
        target: 'http://tes.eyun.cn/yca',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/yca': ''
        }
      },
      '/coap': { //此处并非一定和url一致。,
        target: 'http://tes.eyun.cn/coap',
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/coap': ''
        }
      },
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 88, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    env: require('./prod.env'),

    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
