// vue.config.js
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  devServer: {
    host: '0.0.0.0',
    public:'172.168.179.196:8081',
    // port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck:true,
    port: 8081,     // 端口
    proxy: {  // 代理配置
      '/api': {
        target: 'http://localhost:3000/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
    // proxyTable: {
    //   '/api': {
    //     target: 'http://localhost:3000/api',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  publicPath: './',
  productionSourceMap: true,
  lintOnSave: false,   // 取消 eslint 验证
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "~@/assets/css/_global-variables.sass";`
      },
      postcss: {
        plugins: [
          // autoprefixer(),
          // pxtorem({
          //   rootValue: 10, // 根节点的
          //   propList: ['*']
          // })
        ]
      }
    }
  }
}
