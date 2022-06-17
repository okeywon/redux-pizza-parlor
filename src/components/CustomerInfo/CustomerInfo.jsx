import {useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
function CustomerInfo(){
    console.log('Inside Customer Info')
    const history = useHistory();
    const customerInfo = useSelector(store => store.customerInfo)
    const dispatch = useDispatch();
    const [costomerName, setCostomerName] = useState('');
    const [costomerAddress, setCostomerAddress] = useState('');
    const [costomerCity, setCostomerCity] = useState('');
    const [costomerZip, setCostomerZip] = useState('');

    const handelEvent = (evt) => {
        evt.preventDefault();
        console.log('Inside customer to data base')
    }
     const submitInfo = ()=>{
        dispatch({
            type: 'SET_COSTOMER_ORDER',
            payload:{
                costomerName,
                costomerAddress,
                costomerCity,
                costomerZip
            }
        })
      }  
    const sendHisttory = () => {
        submitInfo()
        history.push('/api/checkout');
    }

    return (
        <>
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handelEvent}>
        <ul>
            <li>
                <input 
                onChange={(event) => {setCostomerName(event.target.value)}}
                type={'text'} 
                placeholder="Name"/>
                <span><input type={"radio"}/>Pickup</span>
            </li>
            <li>
                <input 
                onChange={(event) => {setCostomerAddress(event.target.value)}}
                type={'text'} 
                placeholder="Street Address"/>
                <span><input type={"radio"}/>Delivery</span>
            </li>
            <li>
                <input 
                onChange={(event) => {setCostomerCity(event.target.value)}}
                type={'text'} 
                placeholder="City"/>
            </li>
            <li>
                <input 
                onChange={(event) => {setCostomerZip(event.target.value)}}
                type={"number"} 
                placeholder="Zip"/>
            </li>
        </ul>

        </form>
        <div>
            <button onClick={sendHisttory}>Next</button>
        </div>
        </>
    )
}

export default CustomerInfo