//配置开发服务功能
const devServer  = {
    contentBase:path.resolve(__dirname,'dist'),
    host:'127.0.0.1',
    port:'8080',
    compress:true,
    hot:true,
    open:true  //自动打开网页
};
module.exports = devServer;