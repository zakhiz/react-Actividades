const Item=({product})=>{
    
    return(
        <div className="card-prod">
         <img className="ph" src={product.Image} alt = "product" />
            <div>
               <h3 className="prod-title">{product.title}</h3>
                <p className="description">{product.description}</p>  
            </div>        
        </div>
    )
}

export default Item