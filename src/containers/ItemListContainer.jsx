import React,{useEffect, useState} from "react";
import getList from "../utils/getProducts";
import ItemList from "../components/ItemList";
import Loader from "../components/loader";
const ItemListContainer = (props)=>{
    const [array,setArray] = useState([]);
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
     getList()
     .then((response)=> setArray(response))
     .catch((err)=> console.error(err))
     .finally(()=> setLoading(false))
  }, []);


   
    return(
     <>
     
     <p className="hello">{props.greeting}</p>
     <hr></hr>
        
     {
        loading ? <Loader/> : <ItemList products={array}/>
         
     }
    
     </>
    )
}
export default ItemListContainer;