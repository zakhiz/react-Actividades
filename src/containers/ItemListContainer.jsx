import ItemList from "../general/ItemList";
import csFetch from "../utils/fetchCs";
import products from "../utils/getProducts";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
const ItemListContainer = ()=>{
  const [array,setArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
useEffect(() => {
   if(id){
      setLoading(true)

    csFetch(2000,products)
    .then(result=> setArray(result.filter(item =>item.categoryId == id)))
    .catch(err => console.error(err))
    .finally(()=> setLoading(false))
   }else{
    setLoading(true)
    csFetch(2000,products)
    .then(result=> setArray(result))
    .catch(err => console.error(err))
    .finally(()=> setLoading(false))
   }
  
}, [id]);

    return(
     <div>
      {

         loading ? <Loader/> : <ItemList items={array}/>        
        
      }
     </div>
    )
}
export default ItemListContainer;