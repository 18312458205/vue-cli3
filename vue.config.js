const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const moment = require('moment')

process.env.VUE_APP_DATE = moment().format('YYYY-MM-DD(dddd) HH:mm:ss')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/app/' : '/',
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
    config.plugin('html').tap((args) => {
      args[0].minify = {
        ...args[0].minify,
        removeComments: false
      }
      return args
    })
    config.plugins.delete('prefetch')
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
