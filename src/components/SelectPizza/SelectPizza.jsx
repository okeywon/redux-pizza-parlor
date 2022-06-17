import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function PizzaList(){
    const pizzaList = useSelector(store => store.pizzaList);
    const dispatch = useDispatch();
    let total = 0;

    console.log(pizzaList);

    const onAddPizza = (pizza) => {
        total += Number(pizza.price);
        console.log('Added a pizza', pizza.name, pizza.price);
        console.log(total);
        dispatch({
            type: 'SET_CART',
            payload: {
                name: pizza.name,
                total: pizza.price,
            }
        });
    }

    return (
        <>
            <span className='header'>
                <h1>Prime Pizza</h1>
                <p>Total:{total}</p>
            </span>
            <h3>Step 1: Select Your Pizza</h3>
            <div className='mainDiv'>
                <span>
                    {pizzaList.map((pizza) =>
                        <span key={pizza.id} className="eachPizza">
                            <img src={pizza.image_path} width="300" height="230"/>
                            <h3>{pizza.name}</h3>
                            <p>{pizza.description}</p>
                            <p>{pizza.price}</p>
                            <button type="submit" onClick={onAddPizza(pizza)}>Add</button>
                        </span>
                    )}
                </span>
            </div>
            <Link to='/api/order'>
              <button>Next</button>
            </Link>
        </>
    )
}

export default PizzaList;