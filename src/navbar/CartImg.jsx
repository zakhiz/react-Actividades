import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget';
const CartImg=()=>{
    return(
        <div>
            <Link to="/cart"><FaCartArrowDown className='cart'/><CartWidget /></Link>
        </div>
        
    )
}
export default CartImg;