import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
const ItemDetail = ({products})=>{
    const onAdd= (quantity)=>{
        Swal.fire({
            title: `${quantity} products added!`,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
  return(
 <>
    <div className="card-prod">
             <div className="ph-container">
                 <img className="ph" src={products.Image} alt = "product" />
             </div>            
             <div className="text">
               <h3 className="prod-title">{products.title}</h3>
                <p className="description">{products.description}</p>  
             </div>
             <div className="botton">
               <ItemCount initial={1} stock={5} onAdd={onAdd}/>   
             </div>        
    </div>
 </>
  )
}

export default ItemDetail;