import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
const ItemDetail = ({detail})=>{
    const onAdd= (quantity)=>{
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
               <ItemCount initial={1} stock={5} onAdd={onAdd}/>   
             </div>        
    </div>

  )
}

export default ItemDetail;