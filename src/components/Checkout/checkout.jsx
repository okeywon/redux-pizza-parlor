import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Checkout(){
// const customerInfo = useSelector(store => store.customerInfo);
 const history = useHistory();


 const dispatch = useDispatch();
 const finalReducer= useSelector(store=>store.finalReducer);





    return (
        <> 
       <h1> Checkout </h1>
       <h3>fina</h3>
        </>
    )
}
export default Checkout;