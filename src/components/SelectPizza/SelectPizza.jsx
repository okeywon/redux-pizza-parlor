import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function PizzaList(){
    const dispatch = useDispatch();
    const pizzaList = useSelector(store => store.pizzaList);
    console.log(pizzaList);
    // use useSelector to make the cart reducer available to us
    const cart = useSelector(store => store.cart);
    // make a function, maybe name it getTotalPrice
    // this function will loop through the cart reducer, and
    // return the total price
    const getTotalPrice = (cart) => {
        console.log('cart is', cart);
        let total = 0;
        for(let item of cart){
            total+=item.price
        }
        return total;
    }

    const onAddPizza = (pizza) => {
        console.log('Added a pizza', pizza.name, pizza.price);

        dispatch({
            type: 'ADD_PIZZA_TO_CART',
            payload: {
                name: pizza.name,
                price: Number(pizza.price),
            }
        });
    }

    return (
        <>
            <span className='header'>
                <h1>Prime Pizza</h1>
                <p>Total: {getTotalPrice(cart)}</p>
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
                            <button type="submit" onClick={() => {onAddPizza(pizza)}}>Add</button>
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