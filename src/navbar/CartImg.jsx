import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CartImg=()=>{
    return(
        <Link to="/cart"><FaCartArrowDown className='cart'/></Link>
    )
}
export default CartImg;