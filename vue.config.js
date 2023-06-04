/* cli config */
const sourceMap = process.env.ENV === 'testing' // if testing mode, need map
const resolve = (dir) => require('path').join(__dirname, dir)
module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    port: 8080,
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://10.6.11.41:9012',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/platform'
        }
      }
    }, // 设置代理
    // before: app => {}
    overlay: {
      warnings: true,
      errors: true
    }
  },
  filenameHashing: true,
  productionSourceMap: sourceMap
}
