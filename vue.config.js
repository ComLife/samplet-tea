module.exports = {
  publicPath: './',
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: {
      '/origin': {
        target: 'http://121.40.53.82',
        changeOrigin: true,//是否跨域,
        ws: true, // proxy websockets
        pathRewrite: {//重写路径
          "^/origin": ''//代理路径
        }
      }
    }, // 设置代理

  }
};
