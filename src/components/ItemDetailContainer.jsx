import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import getList from "../utils/getProducts";
import Loader from "./loader";
const ItemDetailContainer = () =>{
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    getList()
    .then((response)=>setData(response[1]))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
    
  }, []);
  return(
    <>
         {
            loading ? <Loader/> : <ItemDetail products={data}/>  
         }
    </>
  )
}
export default ItemDetailContainer;