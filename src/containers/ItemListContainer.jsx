import ItemList from "../general/ItemList";
//import csFetch from "../utils/fetchCs";
//import products from "../utils/getProducts";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import { collection, getDocs, query , where} from "firebase/firestore";
import {db} from "../utils/firebaseConfig"
const ItemListContainer = ()=>{
  const [array,setArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
useEffect(() => {
   setLoading(true)
   let q;
   if(id){
       q = query(collection(db, "products"), where('categoryId' , '==' , parseInt(id)));
   }else{
       q = query(collection(db, "products"));
   }

      const firestoreFetch = async() =>{
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(document => ({
         id: document.id,
         ...document.data()
      }))
       return dataFromFirestore 
   } 
    firestoreFetch()
    .then(result => setArray(result))
    .catch(err => console.error(err))
    .finally(()=> setLoading(false))
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


