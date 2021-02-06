const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    // 路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@styles', resolve('src/styles'))
      .set('@c', resolve('src/components'))
      .set('@api', resolve('src/api'))
      .set('@store', resolve('src/store'))
      .set('@router', resolve('src/router'))
      .end()
    
    // 全局css
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/styles/global.scss',
        })
        .end()
    })
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://182.92.81.247/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}