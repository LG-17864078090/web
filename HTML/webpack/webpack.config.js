const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    //mode两种样式：development开发模式和production产品模式
    mode: 'development',
    //入口文件配置
    entry: {
        'index': "./src/index.js"
    },
    //出口文件配置
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    //模块：例如解读css，图片如何转换，压缩
    // module: {},
    //插件：用于生产模块和各项功能
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({  //网页打包
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html' //html路径
        })
    ],
    //配置开发服务功能
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        port:'8080',
        compress:true,
        hot:true,
        open:true  //自动打开网页
    }
};