import Item from "./Item";

const ItemList = ({items})=>{
 
    return(
      <div className="container d-flex justify-content-center align-items-center h-100" >
        <div className="row">
                
                  {
                         items.map(itm =>
                           <div className="col-md-4 "key={itm.id}>
                             <Item  
                                 
                                id={itm.id}
                                image={itm.Image}
                                title={itm.title}
                                description={itm.description}/>
                           </div>
                          
                          )
                   } 
               
        </div>
        
         
    </div>
    );
}
export default ItemList;