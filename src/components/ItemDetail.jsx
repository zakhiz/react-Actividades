import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useState } from "react";
const ItemDetail = ({detail})=>{
  const [goCart, setgoCart] = useState(false)
    const onAdd= (quantity)=>{
      setgoCart(true)
        Swal.fire({
            title: `${quantity} products added!`,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
  return(

    <div>
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
               <Link to="/cart"><button>Cart</button></Link> :   
                <ItemCount initial={0} stock={5} onAdd={onAdd}/>
              }
               </div>        
    </div>

  )
}

export default ItemDetail;