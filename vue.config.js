module.exports = {
    devServer: {
        proxy: {
          '/mocho': {
            target: 'http://mocho.pocka.info/oneline',
            ws: true,
            changeOrigin: true,
            pathRewrite: {'^/mocho' : ''}
            }
        }
    },
    productionSourceMap:false,
    pages:{
        index: {
            // page 的入口
            entry: 'src/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
          },
        producer:{
            entry: 'src/producer/main.js',
            template:"public/producer.html",
            filename:'producer.html',
            title:'producer',
            chunks: ['chunk-vendors', 'chunk-common', 'producer']
        }
    }    
}