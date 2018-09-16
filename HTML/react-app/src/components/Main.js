import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect,Prompt} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import HomePage from './HomePage';
import Children from './Children';

const Jump = (props)=>{
    return <Link to={props.to}>jump</Link>

};

const x = (props)=>{
    return(
        <div>
            <button onClick={()=>{props.history.push('/')}}>click</button>
        </div>
    )
};

class Main extends Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return (
            <div>
                Main主页面
                <Router>
                    <div>
                        <Link to='/'>首页 </Link>
                        ----
                        <Link to='/a/5'>跳转A </Link>
                        ----
                        <Link to='/b'>跳转B </Link>
                        ----
                        <Link to='/render'>Render页面 </Link>
                        ----
                        <Link to='/redirect'>Redirect页面 </Link>
                        ----
                        <Link to='/x'>编程式导航 </Link>
                        ----
                        <Link to='/children/6'>Children页面 </Link>

                        {/*模糊匹配 ：Switch解决首页一直出现问题,匹配到第一个符合的路径后终止匹配*/}
                        {/*<Switch>*/}
                            {/*<Route path='/a' component={PageA}></Route>*/}
                            {/*<Route path='/b' component={PageB}></Route>*/}
                            {/*<Route path='/' component={HomePage}></Route>*/}
                        {/*</Switch>*/}

                        <Route exact path='/' component={HomePage}></Route>
                        <Route path='/a/:id' component={PageA}></Route>
                        <Route path='/b' component={PageB}></Route>

                        <Route path='/render' render={()=>{return <h4>Render页面</h4>}}></Route>

                        {/*重定向*/}
                        <Route path='/redirect' render={()=>{return <Redirect to='/b'/>}}></Route>

                        {/*默认都会显示children组件，可以通过判断来决定显示内容*/}
                        <Route path='/children/:num' chiidren>{Children}</Route>

                        <Route path='/x' component={x}></Route>

                        <Prompt when={this.state.show} message='是否离开当前页'></Prompt>

                        <Jump to='/'></Jump>



                    </div>
                </Router>
            </div>
        )
    }
}

export default Main;