// vue.config.js
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  devServer: {
    port: 8081,     // 端口
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
          autoprefixer(),
          pxtorem({
            rootValue: 50, // 根节点的
            propList: ['*']
          })
        ]
      }
    }
  }
}
