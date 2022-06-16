import {useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function CustomerInfo(){
    console.log('Inside Customer Info')

    const customerInfo = useSelector(store => store.customerInfo)
    const [costomerName, setCostomerName] = useState('');
    const [costomerAddress, setCostomerAddress] = useState('');
    const [costomerCity, setCostomerCity] = useState('');
    const [costomerZip, setCostomerZip] = useState('');

    return (
        <>
        <h2>Step 2: Customer Information</h2>
        <ul>
            <li>
                <input type={'text'} placeholder="Name"/>
            </li>
            <li>
                <input type={'text'} placeholder="Street Adress"/>
            </li>
            <li>
                <input type={'text'} placeholder="City"/>
            </li>
            <li>
                <input type={"number"} placeholder="Zip"/>
            </li>
        </ul>
        <div>
            <Link to='/api/checkout'>
            <button>Next</button>
            </Link>
        </div>
        </>
    )
}

export default CustomerInfo