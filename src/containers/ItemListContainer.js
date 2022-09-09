import ItemCount from "../components/ItemCount";
import Swal from 'sweetalert2'
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


    const onAdd= (quantity)=>{
        Swal.fire({
            title: `${quantity} products added!`,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    return(
     <>
     
     <p className="hello">{props.greeting}</p>
     <hr></hr>
     {
        loading ? <Loader/> : <ItemList products={array}/>
     }
     
     <ItemCount initial={1} stock={5} onAdd={onAdd}/>

     </>
    )
}
export default ItemListContainer;