import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const ItemDetail = ({detail})=>{
  const {addItem,isInCart,removeProduct} = useContext(CartContext)
    const onAdd= (quantity)=>{
      
        Swal.fire({
            title: `${quantity} products added!`,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          addItem(detail,quantity)
    }

   

  return(

    <div>
              <Link to="/"><button className="btn btn-info">Continue Shopping</button></Link>
             <div>
                 <img src={detail.Image} alt = "product" />
             </div>            
             <div>
               <h3>{detail.title}</h3>
                <p>{detail.description}</p>  
                <p className="text-danger">{detail.price}</p>
                <p>{detail.stock}</p>
             </div>
             {isInCart(detail.id) ? 
                <div>
                   <p>Already in cart</p>
                   <button className="btn btn-danger" onClick={() => removeProduct(detail.id)}>Delete from cart</button>
                </div>
                : <p>Add Now!</p>
                }
              {
               (isInCart(detail.id)) ?
               <Link to="/cart" ><button className="btn btn-warning">Cart</button></Link> :   
                <ItemCount initial={detail.initial} stock={detail.stock} onAdd={onAdd}/>
              }
                       
    </div>

  )
}

export default ItemDetail;