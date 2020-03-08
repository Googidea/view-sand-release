const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/view-sand/',
    chainWebpack: config => {
        config.module.rule('svg').exclude.add(resolve('src/icons')).end();
        console.info(resolve('src/icons/svg'));
        config.module
         .rule('svg-sprite-loader')
         .test(/\.svg$/)
         .include.add(resolve('src/icons')).end()
         .use('svg-sprite-loader')
         .loader('svg-sprite-loader')
         .options({
            symbolId: 'icon-[name]'
         })
    },
    configureWebpack: {
        devtool: 'source-map'
    }
  }