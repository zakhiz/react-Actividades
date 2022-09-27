import React,{useContext} from 'react';
import { CartContext } from './CartContext';
const CartWidget = () => {
    const {totalProductsQty} = useContext(CartContext)
    return (
       
            <div>
             {(totalProductsQty() !== 0) && <span className="badge">{totalProductsQty()}</span>}
            </div>

    );
}

export default CartWidget;
