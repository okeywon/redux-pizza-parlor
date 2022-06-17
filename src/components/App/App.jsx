import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaList from '../SelectPizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    fetchPizzas();
  }, []);

  const fetchPizzas = () =>{
    axios({
      method:  'GET', 
      url: '/api/pizza'
    }).then(response=>{
      dispatch({
        type: 'SET_PIZZAS', 
        payload: response.data
      });
    }).catch(err=>{
      console.log('error in GET', err)
    });
  }

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <main>
        
          <img src='images/pizza_photo.png' width="400" height="300"/>
          <p>Pizza is great.</p>
        <Link to="/api/pizza">Order Pizzas</Link>
        <Route path='/' exact>
        </Route>
        <Route path='/api/pizza'>
          <PizzaList/>
        </Route>
         <Route path='/api/order' exact>
            <CustomerInfo/>
        </Route>
      </main>
    </div>
    </Router>
  );
}

export default App;
