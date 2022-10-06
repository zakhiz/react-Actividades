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

    <div className="container">
          <div className="card-center">
             <div className="ft-referencia">
                 <img className="ft" src={detail.Image} alt = "product" />
             </div>            
             <div className="text-detail-fonts">
               <h3>{detail.title}</h3>
                <p>{detail.description}</p>  
                <p className="text-danger">Price: ${detail.price}</p>
                <p>Stock : {detail.stock}</p>
             </div>
             {isInCart(detail.id) ? 
                <div >
                   <p className="text-detail-fonts">Already in cart</p>
                   <button className="btn btn-danger bt" onClick={() => removeProduct(detail.id)}>Delete from cart</button>
                </div>
                : <p className="text-detail-fonts">Add Now!</p>
                }
              {
               (isInCart(detail.id)) ?
               <Link to="/cart" ><button className="btn btn-warning bts">Go to Cart</button></Link> :   
                <ItemCount initial={detail.initial} stock={detail.stock} onAdd={onAdd}/>
              }
           </div>            
    </div> 

  )
}

export default ItemDetail;