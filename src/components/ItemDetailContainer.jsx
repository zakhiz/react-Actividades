import csFetch from "../utils/fetchCs";
import products from "../utils/getProducts";
import ItemDetail from "./ItemDetail";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./loader";
const ItemDetailContainer = () =>{
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    csFetch(2000,products.find(item => item.id == id))
    .then(result => setData(result))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, []);
  return(
     <div>
      {
        loading ? <Loader/> : <ItemDetail detail={data}/>

}
      
     </div>
  )
}
export default ItemDetailContainer;