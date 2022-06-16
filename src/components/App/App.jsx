import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaList from '../SelectPizza/SelectPizza';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <main>
        
          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
        <Link to="/api/pizza">Order Pizzas</Link>
        
        <Route path='/' exact>
        </Route>
        <Route path='/api/pizza'>
          <PizzaList/>
        </Route>



      </main>
    </div>
    </Router>
  );
}

export default App;
