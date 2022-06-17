import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaList from '../SelectPizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx';
import Home from '../Home/Home';
import Checkout from '../Checkout/checkout';
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
      <div className='App'>
    <Router>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
        <div>
        <Link to="/api/pizza">Order Pizzas</Link>
        <Link to='/api/order'><button>Next</button></Link>
        <Link to="/">Home</Link>
        </div>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path= '/Header'>   
        </Route>
        <Route path='/api/pizza'> 
        <PizzaList/>
        </Route>
         <Route path='/api/order' exact>
            <CustomerInfo/>
        </Route>
        <Route path='/api/checkout'>
          <Checkout /> 
        </Route>

        </Router>
    </div>
  );
}

export default App;
