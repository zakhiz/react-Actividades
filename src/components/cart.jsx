import { Link } from "react-router-dom";
import { useContext } from "react"; 
import { CartContext } from "./CartContext";
const Cart = () => {
   const {CartList,clear,removeProduct,totalPrice} = useContext(CartContext);

    return (
        <>
            <h1 className="text-center text-secondary">YOUR CART</h1>
            <button className="btn btn-danger" onClick={clear}>Delete ALL</button>

            {
                CartList.length === 0 ? 
                      <div>
                     <Link to="/" className="btn btn-secondary">Continue Shopping</Link>
                        <p>Empty Cart</p>       
                      </div>
                      :
                <div>
                     {
                        CartList.map(item => <div key={item.id}>
                                                 <img src={item.Image} alt="refe"/>
                                                 <h3>{item.title}</h3>
                                                 <p> cantidad : {item.quantity}</p>
                                                 <p>Subtotal : ${item.quantity * item.price} </p>
                                                 <button className="btn btn-danger" onClick={() => removeProduct(item.id)}>eliminar</button>
                                                  <div>
                                                    <p className="text-danger">total: ${totalPrice()}</p>
                                                  </div>
                                               </div>)
                    }
                </div> 
                   
            }
            
        </>
    );
}

export default Cart;
