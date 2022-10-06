import { Link } from "react-router-dom"

const Item=({id,image,title,price,stock})=>{
    
    return(
       <div className="card text-center card-edit">
             <img className="card-img-top" src={image} alt="reference"/>
           <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="text-danger precio">${price}</p>
               <p className="text-stock">Stock: {stock}</p>
               <Link className="btn btn-secondary text-btn " to={`/item/${id}`}>More Detail</Link>
           </div>
        
       </div>
      
    )
}

export default Item


