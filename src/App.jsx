import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
//import ItemListContainer from "./containers/ItemListContainer";
const App =() =>{
  return(
   <div>
   <Navbar/>
   {/*<ItemListContainer className="page" greeting = "Hello World"/>*/}
   <ItemDetailContainer/>

  </div>
  )
  
}
export default App;
