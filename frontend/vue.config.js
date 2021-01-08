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
        target: '/cqb/base/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/custom': {
        target: '/cqb/customer/industry/',
        changeOrigin: true,
        pathRewrite: {
          '^/custom': ''
        }
      },
      '/base': {
        target: '/cqb/index/',
        changeOrigin: true,
        pathRewrite: {
          '^/base': ''
        }
      },
      '/industry': {
        target: '/cqb/industry/',
        changeOrigin: true,
        pathRewrite: {
          '^/industry': ''
        }
      },
      '/chain': {
        target: '/cqb/chain/industry',
        changeOrigin: true,
        pathRewrite: {
          '^/chain': ''
        }
      }
    }
  }
}
