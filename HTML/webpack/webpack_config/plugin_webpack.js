//插件：用于生产模块和各项功能
const plugin = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({  //网页打包
        filename:'index1.html',//打包后的html文件名
        chunks:['index'],//选择该页面所需要引入的js文件，与entry对应
        minify:{
            removeAttributeQuotes:true//去双引号
        },
        hash:true,
        template:'./src/index.html'   //html源文件路径
    }),
    //多个页面
    // new HtmlPlugin({      //网页打包
    //     filename:'index2.html',
    //     chunks:['index2'],
    //     minify:{
    //         removeAttributeQuotes:true
    //     },
    //     hash:true,
    //     template:'./src/index2.html' //html路径
    // })
    new ExtractTextPlugin("css/style.css"),
    new PurifyCSSPlugin  ({    //清除为使用的css  （css选择器带有标签的样式无法清除）
        paths: glob.sync(path.join(__dirname,'src/*.html'))
    }),
    new webpack.BannerPlugin('LG专属')   //打包注释
];
module.exports = plugin;