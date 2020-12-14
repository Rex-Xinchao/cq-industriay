const path = require('path')
const SOURCE_MAP = process.env.NODE_ENV !== 'production'
const CROSSORIGIN = 'anonymous'

module.exports = {
  outputDir: '../web',
  indexPath: './index.html',
  crossorigin: CROSSORIGIN,
  integrity: true,
  productionSourceMap: SOURCE_MAP,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views'),
        '@images': path.resolve(__dirname, './src/assets/imgs'),
        '@styles': path.resolve(__dirname, './src/assets/styles')
      }
    }
  },
  chainWebpack: (config) => {
    config.output.filename('[name].[hash].js').end()
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.250.214:30100/cqb/base/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/custom': {
        target: 'http://192.168.250.214:30100/cqb/customer/industry/',
        changeOrigin: true,
        pathRewrite: {
          '^/custom': ''
        }
      },
      '/base': {
        target: 'http://192.168.250.214:30100/cqb/index/industry/',
        changeOrigin: true,
        pathRewrite: {
          '^/base': ''
        }
      }
    }
  }
}
