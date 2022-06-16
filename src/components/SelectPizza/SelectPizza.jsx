import {useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx'

function PizzaList(){
    const pizzaList = useSelector(store => store.pizzaList);

    return (
        <>
        <Router>
        <span>
            <h1>Prime Pizza</h1>
            <p>Total:</p>
        </span>
        <h3>Step 1: Select Your Pizza</h3>
        <span>
            <img src="../images/pizza_photo.png"/>
            <h3>Supreme Pizza</h3>
            <p>It has everything!</p>
            <p>$12.99</p>
            <button>Add</button>
        </span>
        <Link to={`/api/order`}>
            <button>Next</button>
        </Link>
        <Route path='/api/order'>
          <CustomerInfo/>
        </Route>
        </Router>
        </>
    )
}

export default PizzaList;