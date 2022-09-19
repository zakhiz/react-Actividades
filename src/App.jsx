import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./navbar/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; 
const App =() =>{
  return(
   <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path="/" element={<ItemListContainer className="page"/>}/>
           <Route path="/category/:id" element={<ItemListContainer/>}/>
           <Route path="/item/:id" element={<ItemDetailContainer/>}/>
         </Routes>
  </BrowserRouter>
  )

}
export default App;
