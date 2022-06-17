import {useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {useHistory} from 'react-router-dom'
function CustomerInfo(){
    console.log('Inside Customer Info')
    const history = useHistory();

    const sumTotal= useSelector(store => store.sumTotal);

    const customerInfo = useSelector(store => store.customerInfo)
    const dispatch = useDispatch();
    const [customer_name, setCustomerName] = useState('');
    const [street_address, setCustomerAddress] = useState('');
    const [city, setCustomerCity] = useState('');
    const [zip, setCustomerZip] = useState('');

    const handelEvent = (evt) => {
        evt.preventDefault();
        console.log('Inside customer to data base')
    }
     const submitInfo = ()=>{
        dispatch({
            type: 'SET_COSTOMER_ORDER',
            payload:{
                customer_name,
                street_address,
                city,
                zip,
                
                
            }
        })
      }  
    const sendHisttory = () => {
        submitInfo()
        history.push('/api/checkout');
    }
const setDeliveryOption = () => {
    console.log('delivery option is pickup')

}
    return (
        <>
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handelEvent}>
        <ul>
            <li>
                <input 
                onChange={(event) => {setCustomerName(event.target.value)}}
                type={'text'} 
                placeholder="Name"/>
                <span><input name='deliveryMethod' type={"radio"}  onClick={() => setDeliveryOption()}/>Pickup</span>
            </li>
            <li>
                <input 
                onChange={(event) => {setCustomerAddress(event.target.value)}}
                type={'text'} 
                placeholder="Street Address"/>
                <span><input name='deliveryMethod' type={"radio"}/>Delivery</span>
            </li>
            <li>
                <input 
                onChange={(event) => {setCustomerCity(event.target.value)}}
                type={'text'} 
                placeholder="City"/>
            </li>
            <li>
                <input 
                onChange={(event) => {setCustomerZip(event.target.value)}}
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