import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

// defaultPizzas = [
//     {
//         id: 1,
//         name: 'Supreme Pizza',
//         description: 'It has everything!',
//         price: 12.99,
//         img_path: 
//     },
//     {

//     }
// ]

const pizzaList = (state = [], action) => {
    switch(action.type){
        case 'SET_PIZZA_LIST':
            return action.payload;
    }
    return state;
}

const pizzaStore = createStore(
    combineReducers({
        pizzaList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={pizzaStore}><App /></Provider>, document.getElementById('root'));
