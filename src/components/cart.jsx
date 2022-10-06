import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { useContext } from "react"; 
import { CartContext } from "./CartContext";
import {  increment, serverTimestamp,doc, setDoc,collection,updateDoc } from "firebase/firestore";
import {db} from "../utils/firebaseConfig"
const Cart = () => {
   const {CartList,clear,removeProduct,totalPrice} = useContext(CartContext);
  const createOrder = async () =>{
     let itemForDB = CartList.map(item =>({
        id: item.id,
        price: item.price,
        title: item.title,
        quantity: item.quantity
     }))
     let order = {
        buyer : {
            name : "messi",
            email : "leomesi@gmail.com",
            phone : "1124242S"
        },
        date : serverTimestamp(),
        items : itemForDB,
        total : totalPrice()
        
     }
     const newOrderRef = doc(collection(db,"orders"));
     await setDoc(newOrderRef, order);
     CartList.forEach(async (item) => {
        const itemRef = doc(db,"products",item.id);
        await updateDoc(itemRef,{
            stock : increment(-item.quantity)
        });
     });
     clear()
  
     Swal.fire({
      title: "your order has been created id order is"  + newOrderRef.id,
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    })  
  }
    return (
        < div className="container">
            <div className="conta">
                <div>
                <h1 className="text-center text-dark">YOUR CART</h1>
                </div>
                <button className="btn btn-danger btn-delete" onClick={clear}>Delete All</button>
               

            {
                CartList.length === 0 ? 
                      <div>
                     <Link to="/" className="btn btn-dark">Continue Shopping</Link>
                        <p className="text-center text-dark text-empty">Empty Cart</p>       
                      </div>
                      :
                <div>
                     {
                        CartList.map(item => <div className="card-prod" key={item.id}>
                                                 <img src={item.Image} alt="refe"/>
                                                 <h3>{item.title}</h3>
                                                 <p> cantidad : {item.quantity}</p>
                                                 <p>Subtotal : ${item.quantity * item.price} </p>
                                                 <button className="btn btn-danger" onClick={() => removeProduct(item.id)}>eliminar</button>

                                               </div>)
                    }
                                                  <div className="card-total">
                                                    <p className="text-total">total: ${totalPrice()}</p>
                                                  </div>
                     <div><button onClick={createOrder} className="btn btn-dark">CHECKOUT NOW</button></div>
                </div> 
                   
            }
              </div>           
         </div>
    );
}

export default Cart;
