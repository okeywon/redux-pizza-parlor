import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import './App.css';

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
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
