import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
const App =() =>{
  return(
   <div>
   <Navbar/>
   <ItemListContainer className="page" greeting = "Hello World"/>

  </div>
  )
  
}
export default App;
