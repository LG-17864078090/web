import React, { Component } from 'react';
import store from './../store';
import {connect} from 'react-redux';

//声明Action对象
const add = ()=>{
  console.log('--Action--');
  return {
      type:'ADD',
  }
};

class App extends Component {
  addHandle(){
    store.dispatch(add());
  }
  render() {
    return (
      <div className="App">
        <h1>state:{this.props.count}</h1>
        <button onClick={this.addHandle.bind(this)}>Click</button>
      </div>
    );
  }
}


//把state里面的count映射成名为count的props以供插件使用
const mapStateToProps = (state)=>{
    return{
        count:state.count
    }
};

export default connect(mapStateToProps)(App);
