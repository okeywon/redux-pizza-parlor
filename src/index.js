import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

const cart = (state = [], action) => {
    switch(action.type){
        case 'ADD_PIZZA_TO_CART':
            return [...state, action.payload]
    }
    return state;
}


const defaultCustomerInfo = [{
    customer_name: "Donatello",
    street_address: "20 W 34th St",
    city: "New York",
    zip: "10001",
    "type": "Pickup",
}]
const customerInfo = (state = defaultCustomerInfo, action) => {
    switch(action.type){
        case 'SET_COSTOMER_ORDER':
            return [...state, action.payload]
    }
    return state;
}


// const sumTotal = (state = 0, action) =>{
//     switch(action.type){
//         case 'UP_THE_PRICE':
//             return action.payload
//     }
//     return state;
//     }




const pizzaList = (state = [], action) => {
    switch(action.type){
        case 'SET_PIZZAS':
            return action.payload;
    }
    return state;
}

const checkoutRed= (state = [], action) =>{
    switch(action.type){
        case 'ADD_PIZZA_ORDER':
            return action.payload;
    }
    return state;
 }

const pizzaStore = createStore(
    combineReducers({

        pizzaList, 
        customerInfo,
        cart ,
        checkoutRed
        



    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={pizzaStore}><App /></Provider>, document.getElementById('root'));