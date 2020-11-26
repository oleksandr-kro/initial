import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux'



const initialState={
    name:'321',
    count:0
};
const reducer =(state=initialState,action)=>{
    switch (action.type) {
                case 'increment':
                    console.log(action.payload)
                    return {...state, count: state.count + 1};
                case 'decrement':
                    return {...state, count: state.count - 1};
                default:
                    return state;
            }
}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App/>

      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
