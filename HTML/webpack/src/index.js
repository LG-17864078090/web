import css from './css/style.css';
import sass from './sass/style.scss';
let author = require('../author.json');
var oDiv = document.getElementById('div1');
oDiv.innerHTML = 'hello webpack';

let a = 20 ;
let b = (n)=>{
    console.log (n);
};
b(a);

$('#div5').html(`div5\n作者：${author.name},年龄${author.age}`);