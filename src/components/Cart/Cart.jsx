import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Cart(){
    const cart = useSelector(store => store.cart);
    console.log('cart is:', cart);

    return (
        <p>Total:{cart}</p>
    );
}

export default Cart;