import { Link } from "react-router-dom";
import Nav from "./Nv";
const Navbar= ()=>{
   return(
    <div>
      <header className='navBar'>
              <Link className='icon' to="/">VeoVeo</Link>  
         <Nav/>
      </header>
    </div>
   );
}
export default Navbar;