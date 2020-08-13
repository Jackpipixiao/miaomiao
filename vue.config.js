module.exports={
    //axios反向代理配置，新建文件后需要重启服务器
    lintOnSave: false,
    devServer: {
      proxy: {
        '/hotel': { //包含ajax后缀的都跨域请求过来,如果json后缀没有ajax就随便填个
          // eslint-disable-next-line no-irregular-whitespace
          target: 'https://www.qunar.com', // 需要跨域的网址官网，这里需要带http
          //ws:true,可以不用的
          changeOrigin: true
        }
        //'/foo':{
        //target:'<other_url>'可以不用的
        //}
      }
    }
}