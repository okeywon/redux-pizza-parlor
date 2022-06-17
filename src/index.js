import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

const cart = (state = [], action) => {
    switch(action.type){
        case 'SET_CART':
            return action.payload;
    }
    return state;
}

const pizzaList = (state = [], action) => {
    switch(action.type){
        case 'SET_PIZZAS':
            return action.payload;
    }
    return state;
}

const pizzaStore = createStore(
    combineReducers({
        pizzaList,
        cart
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={pizzaStore}><App /></Provider>, document.getElementById('root'));