import { useState } from "react";
const ItemCount = ({initial,stock,onAdd})=>{
    const [product,setProduct] = useState(initial);

    const handleAdd = ()=>{
       setProduct(product+1)
      }
    const handleSubtract=()=>{
        setProduct(product-1);
    }
    return(
        <> 
           <div className="card-container">
              <div className="card">
                 <button className="p" disabled={product>=stock} onClick={handleAdd}>+</button>
                  {product}
                 <button className="p" disabled={product<=1} onClick={handleSubtract}>-</button>
                 <button className="add" disabled= {stock <=0} onClick={() => onAdd(product)} >Add to card</button>
             </div>
           </div>
        </>
    )
}
export default ItemCount;