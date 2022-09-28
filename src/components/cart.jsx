import { Link } from "react-router-dom";
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
     alert("your order has been created id/'s order is " + newOrderRef.id)
  }
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

                                               </div>)
                    }
                                                  <div>
                                                    <p className="text-danger">total: ${totalPrice()}</p>
                                                  </div>
                     <div><button onClick={createOrder} className="btn btn-info">CHECKOUT NOW</button></div>
                </div> 
                   
            }
            
        </>
    );
}

export default Cart;
