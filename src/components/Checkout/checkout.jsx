import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Checkout({fetchPizzas}){
 const history = useHistory();
//  const dispatch = useDispatch();
const customerInfo = useSelector(store => store.customerInfo)
const checkoutRed= useSelector(store=>store.checkoutRed);
// const cart= useSelector(store => store.cart);

let pizzas = [];
    let total = 0;
    for (let pizza of checkoutRed) {
        total += Number(pizza.price);
        pizzas.push({
            id: pizza.id,
            quantity: '1'
        })
    }

const returnHome = () =>{
submitCheckoutInfo();
    history.push('/');
}

const submitCheckoutInfo= () =>{
    
    axios.post({
        method: 'POST', 
        url:'/api/order', 
        data: {
            customer_name: customerInfo.customer_name,
            street_address: customerInfo.street_address, 
            city: customerInfo.city, 
            zip: customerInfo.zip,
            pizzas: pizzas,
           
        }
    }).then (response =>{
     console.log('success in Post', response );
    fetchPizzas();                                                                                                                                                                  izzas();
    })
    .catch(err=>{
        console.log('error in POST', err);
    });
}
    return (
        <> 
       <h1> Checkout </h1>
       <h3>{customerInfo.customer_name}</h3>
       <h3>{customerInfo.street_address}</h3>
       <h3>{customerInfo.city} {customerInfo.costomerZip} </h3>
       <table>
        <thead>
            <tr>
                <th> Price</th>
                <th> Pizza </th>
            </tr>
        </thead>
       <tbody> 
        {checkoutRed.map(order =>{
            return (
            <tr key = {order.order_id}>
            <td>{order.pizza_id} </td>
            <td>{order.quantity} </td>

            </tr>)
})}
       </tbody>
       </table>

     <h2>{checkoutRed}</h2>
     <button className="nextBtn" onClick={returnHome}>checkout</button>
        </>
    )
}
export default Checkout;