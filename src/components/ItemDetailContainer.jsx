//import csFetch from "../utils/fetchCs";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./loader";
import {db} from '../utils/firebaseConfig'
const ItemDetailContainer = () =>{
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    setLoading(true)
    const queryDoc = doc(db, 'products', id)
    getDoc(queryDoc)
     .then(result => setData({id: result.id,...result.data()}))
     .catch(err => console.log(err))
     .finally(()=> setLoading(false))
  }, [id]);
  return(
     <div>
      {
        loading ? <Loader/> : <ItemDetail detail={data}/>

}
      
     </div>
  )
}
export default ItemDetailContainer;


