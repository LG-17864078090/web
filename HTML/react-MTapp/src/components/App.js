import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect,Prompt} from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';


class App extends Component{
    constructor(){
        super();
    }
    render(){
        return (

            <Router>
                <div>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/detail/:id' component={Detail}></Route>
                </div>
            </Router>


        )
    }
}

export default App;