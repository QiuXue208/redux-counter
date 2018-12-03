import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'

const reducer = (state,action)=>{
    if(state === undefined){
        return 0
    }
    switch(action.type){
        case 'ADD':return state + action.payload
        case 'MINUS':return state - action.payload
        default:return state
    }
}
function add(){
    store.dispatch({type:'ADD',payload:1})
}
function addTwo(){
    store.dispatch({type:'ADD',payload:2})
}
function minus(){
    store.dispatch({type:'MINUS',payload:1})
}
function addAsync(){
    setTimeout(()=>{
        store.dispatch({type:'ADD',payload:1})
    },2000)
}
const store = createStore(reducer)

function render(){
    ReactDOM.render(<App store={store} add={add} addTwo={addTwo} minus={minus}  addAsync={addAsync} />,document.getElementById('root'));
}
render()
store.subscribe(()=>render())

serviceWorker.unregister();
