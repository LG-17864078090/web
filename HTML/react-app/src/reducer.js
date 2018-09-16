import {combineReducers} from 'redux';

//countReducer   count 是state中的属性
const count = (state=0,action)=>{
    console.log(state,action);
    switch (action.type){
        case'ADD':
            return state+1;
        default:
            return state;
    }
};

//reducer接受两个参数，state和action
const reducer = combineReducers({
    count
});

export default reducer;