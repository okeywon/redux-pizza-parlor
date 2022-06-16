import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';


function PizzaList(){
    const pizzaList = useSelector(store => store.pizzaList);
    console.log(pizzaList);
    return (
        <>
            <span className='header'>
                <h1>Prime Pizza</h1>
                <p>Total:</p>
            </span>
            <h3>Step 1: Select Your Pizza</h3>
            <span>
                {pizzaList.map((pizza) =>
                    <span key={pizza.id}>
                        <img src={pizza.image_path} width="300" height="200"/>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <p>{pizza.price}</p>
                        <button>Add</button>
                    </span>
                )}
            </span>
            <Link to='/api/order'>
              <button>Next</button>
            </Link>
        </>
    )
}

export default PizzaList;