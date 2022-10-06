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
                <div className="bottons">
                 <button className=" btn btn-dark" disabled={product>=stock} onClick={handleAdd}>+</button>
                  {product}
                 <button className=" btn btn-dark" disabled={product<=1} onClick={handleSubtract}>-</button>
                 </div>
                 <button className="btn btn-dark" disabled= {stock <=0} onClick={() => onAdd(product)} >Add to card</button>
             </div>
           </div>
        </>
    )
}
export default ItemCount;