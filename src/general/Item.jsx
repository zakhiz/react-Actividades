import { Link } from "react-router-dom"

const Item=({id,image,title,price,stock})=>{
    
    return(
       <div className="card text-center">
             <img className="card-img-top" src={image} alt="reference"/>
           <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="text-danger">${price}</p>
               <p>{stock}</p>
               <Link className="btn btn-outline-secondary " to={`/item/${id}`}>More Detail</Link>
           </div>
        
       </div>
      
    )
}

export default Item


{/*<div>
        <div>
              <div>
                 <div>
                      <div>
                      </div>
                 </div>
              <div>
               <div>
                    <div>
                       <h5 >{title}</h5>
                     </div>
                  <div>
                    <p >{description}</p>       
                  </div>
                 </div>
            </div>
               
      </div>
        </div>
        
        </div> */}