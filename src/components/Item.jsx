import ItemCount from "./ItemCount";
import Swal from 'sweetalert2'


const Item=({product})=>{
    const onAdd= (quantity)=>{
        Swal.fire({
            title: `${quantity} products added!`,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    return(
        <div className="card-prod">
         <img className="ph" src={product.Image} alt = "product" />
            <div>
               <h3 className="prod-title">{product.title}</h3>
                <p className="description">{product.description}</p>  
               <ItemCount initial={1} stock={5} onAdd={onAdd}/>

            </div>        
        </div>
    )
}

export default Item