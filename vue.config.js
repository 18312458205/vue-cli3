const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const moment = require('moment')

process.env.VUE_APP_DATE = moment().format('YYYY-MM-DD(dddd) HH:mm:ss')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: '首页',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // },
  publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '/',
  outputDir: 'app', // 打包后的目录名称
  assetsDir: 'static',
  lintOnSave: true,
  devServer: {
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        // 压缩js
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_debugger: true, // 删除 debugger
              drop_console: true, // 删除 console
              pure_funcs: ['console.log']
            }
          }
        })
      ]
    }
  },
  chainWebpack: (config) => {
    // config.plugin('fork-ts-checker').tap(([options]) => [{
    //   async: true,
    //   tslint: true,
    //   vue: true
    // }])
    // config.plugin('html').tap((args) => {
    //   args[0].minify = {
    //     ...args[0].minify,
    //     removeComments: false
    //   }
    //   return args
    // })
    // config.plugins.delete('prefetch')
    config.resolve.alias
      .set('@store', resolve('src/store'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@router', resolve('src/router'))
      .set('@service', resolve('src/service'))
      .set('@views', resolve('src/views'))
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
      .loader('babel-loader')
      .end()
  },
  productionSourceMap: false
}
