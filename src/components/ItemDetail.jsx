import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
const ItemDetail = ({detail})=>{
  const {addItem} = useContext(CartContext)
  const [goCart, setgoCart] = useState(false)
    const onAdd= (quantity)=>{
      setgoCart(true)
      
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
             </div>
             <div>
              {
               goCart ?
               <Link to="/cart" ><button className="btn btn-warning">Cart</button></Link> :   
                <ItemCount initial={0} stock={5} onAdd={onAdd}/>
              }
               </div>        
    </div>

  )
}

export default ItemDetail;