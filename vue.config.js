const path = require("path");

let auth = require("./data/auth.json");
let slider = require("./data/slider.json");
let test = require("./data/test.json");
let user = require("./data/user.json");


// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
//     outputDir: 'dist',
//     assetsDir: 'static',
//     filenameHashing: true,
//     // When building in multi-pages mode, the webpack config will contain different plugins
//     // (there will be multiple instances of html-webpack-plugin and preload-webpack-plugin).
//     // Make sure to run vue inspect if you are trying to modify the options for those plugins.
//     pages: {
//         index: {
//             // entry for the pages
//             entry: 'src/main.js',
//             // the source template
//             template: 'src/index.html',
//             // output as dist/index.html
//             filename: 'index.html',
//             // when using title option,
//             // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
//             title: '点一点',
//             // chunks to include on this pages, by default includes
//             // extracted common chunks and vendor chunks.
//             chunks: ['chunk-vendors', 'chunk-common', 'index']
//         }
//         // when using the entry-only string format,
//         // template is inferred to be `public/subpage.html`
//         // and falls back to `public/index.html` if not found.
//         // Output filename is inferred to be `subpage.html`.
//         // subpage: ''
//     },
//     // eslint-loader 是否在保存的时候检查
//     // lintOnSave: true,

//     // 生产环境下禁用 elint-loader 检测
//     lintOnSave: process.env.NODE_ENV !== 'production',
    
//     // 是否使用包含运行时编译器的Vue核心的构建
//     runtimeCompiler: false,
//     // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
//     transpileDependencies: [

//     ],
//     // 生产环境 sourceMap
//     productionSourceMap: false,
//     // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
//     // corsUseCredentials: false,
//     // webpack 配置，键值对象时会合并配置，为方法时会改写配置
//     // https://cli.vuejs.org/guide/webpack.html#simple-configuration
//     configureWebpack: (config) => {

//     },
//     chainWebpack: config => {
//         const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//         types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
//     },
//     css: {
//       loaderOptions: {
//         less: {
//           javascriptEnabled: true
//         }
//       }
//     },
//     // All options for webpack-dev-server are supported
//     // https://webpack.js.org/configuration/dev-server/
//     devServer: {
//         open: true,
//         host: '127.0.0.1',
//         port: 3000,
//         https: false,
//         hotOnly: false,
//         proxy: null,
//         before: app => {

//         }
//     },
//     // 构建时开启多进程处理 babel 编译
//     parallel: require('os').cpus().length > 1,
//     // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
//     pwa: {

//     },
//     // 第三方插件配置
//     // pluginOptions: {
//     //     "style-resources-loader": {
//     //         preProcessor: "less",
//     //         patterns: [
//     //           //这个是加上自己的路径，
//     //           //注意：试过不能使用别名路径
//     //           path.resolve(__dirname, "./src/assets/common.less")
//     //          ]
//     //      }
//     // }
// };


function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/global.less'), // 需要全局导入的less
            ],
        })
}


const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: "static",
  // webpack配置
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    // 去掉预加载功能
    // config.plugins.delete('prefetch')
    // config.plugins.delete('preload')
    
    // if (process.env.NODE_ENV === 'production') {
    //   // 清除css，js版本号
    //   config.output.filename('static/js/[name].js').end();
    //   config.output.chunkFilename('static/js/[name].js').end();
    //   // 为生产环境修改配置...
    //   config.plugin('extract-css').tap(args => [{
    //     filename: `static/css/[name].css`,
    //     chunkFilename: `static/css/[name].css`
    //   }])
    // }
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
        less: {
            javascriptEnabled: true
          }
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
      app.get("/auth", (req, res) => {
        console.log("auth");
        res.json(auth);
      })
      app.get("/slider", (req, res) => {
        res.json(slider);
      })
      app.get("/test", (req, res) => {
        console.log("test");
        res.json(test);
      })
      app.get("/user", (req, res) => {
        res.json(user);
      })
    }
  },
  lintOnSave: false
}