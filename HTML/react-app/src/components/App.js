import React, { Component } from 'react';
import store from './../store';
import {connect} from 'react-redux';

//声明Action对象
const add = (payload)=>{
  console.log('Action +');
  return {
      type:'ADD',
      payload:payload
  }
};
const sub = (payload)=>{
    console.log('Action -');
    return {
        type:'SUB',
        payload:payload
    }
};

class App extends Component {
  addHandle(payload){
    store.dispatch(add(payload));
  }
  render() {
    return (
      <div className="App">
        <h1>state:{this.props.count}</h1>
        <button onClick={this.addHandle.bind(this,2)}> +2 </button><br/>
        <button onClick={()=>{this.props.sub(3)}}> -3 </button>
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


//把action映射成props属性
const  mapDispatchToProps = (dispatch)=>{
    return {
        sub:(payload)=>{
            dispatch(sub(payload))
        }
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(App);
