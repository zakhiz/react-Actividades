import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'
const ItemListContainer = (props)=>{
    
    const onAdd= (quantity)=>{
        Swal.fire({
            title: `${quantity} products added!`,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    return(
     <>
     <p>{props.greeting}</p>
     <hr></hr>
     <ItemCount initial={1} stock={5} onAdd={onAdd}/>

     </>
    )
}
export default ItemListContainer;