module.exports = {
  publicPath: './',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/origin': {
        target: 'http://www.cgo9.cn:8080',
        changeOrigin: true,//是否跨域,
        ws: true, // proxy websockets
        pathRewrite: {//重写路径
          "^/origin": ''//代理路径
        }
      }
    }, // 设置代理

  }
};
