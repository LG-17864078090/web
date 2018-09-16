import React, { Component } from 'react';

//类组件及其传参
class PageA extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                PageA页面<br/>
                参数:{this.props.match.params.id}
            </div>
        )
    }
}


//函数组件及其传参
// const PageA = (props) =>{
//     return (
//         <div>
//             PageA页面<br/>
//             参数:{props.match.params.id}
//         </div>
//     )
// };

export default PageA;