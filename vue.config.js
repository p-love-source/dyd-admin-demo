const path = require("path");
const reqFunc = require("./data/index");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: "static",
  // webpack配置
  chainWebpack: config => {
    // 去掉预加载功能
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')

    if (process.env.NODE_ENV === 'production') {
      // 清除css，js版本号
      config.output.filename('static/js/[name].js').end();
      config.output.chunkFilename('static/js/[name].js').end();
      // 为生产环境修改配置...
      config.plugin('extract-css').tap(args => [{
        filename: `static/css/[name].css`,
        chunkFilename: `static/css/[name].css`
      }])
    }
  },

  configureWebpack: (config) => {
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'] // 移除console
          },
          output: {
            // 去掉注释内容
            comments: false
          }
        },
        sourceMap: false,
        parallel: true
      }),
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        deleteOriginalAssets: false
      })
      // new HtmlWebpackPlugin({
      //   inject: 'body'
      // })
    ]
    // 只有打包生产环境才需要将console删除
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === 'production',
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      // less: {
      //   javascriptEnabled: true
      // },
      sass: {
        // @是src的别名
        data: `
          @import "@/styles/demo.sass";
        `
      }
    }
  },
  // 配置全局less引入
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        //这个是加上自己的路径，
        //注意：试过不能使用别名路径
        path.resolve(__dirname, "./src/styles/less/global.less")
      ]
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: "localhost",
    open: true,
    port: 8080,
    https: false,
    proxy: {
      '/api': {
        target: 'https://devshdsyy.racdn.com',
        // target: 'https://ynxk.xinkangtong.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }, // 设置代理
    before: app => {
      // 设置所有的本地json请求
      reqFunc(app);
    }
  },
  lintOnSave: false
}