import {useSelector} from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx'

function PizzaList(){
    const pizzaList = useSelector(store => store.pizzaList);
    console.log(pizzaList);
    return (
        <>
        <Router>
            <span>
                <h1>Prime Pizza</h1>
                <p>Total:</p>
            </span>
            <h3>Step 1: Select Your Pizza</h3>
            <div>
                {pizzaList.map((pizza) =>
                    <span key={pizza.id}>
                        <img src={pizza.image_path}/>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <p>{pizza.price}</p>
                        <button>Add</button>
                    </span>
                )}
            </div>
            <Link to='/api/order'>
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