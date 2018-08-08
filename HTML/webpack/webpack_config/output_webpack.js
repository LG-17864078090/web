//出口文件配置
const path = require('path');
const output = {
    path: path.resolve(__dirname,'../dist'),
    filename: '[name].js',
    publicPath:'http://localhost:8080/'
};
module.exports = output;