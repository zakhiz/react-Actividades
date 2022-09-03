import { FaCartArrowDown } from 'react-icons/fa';

const Navbar= ()=>{
   return(
    <>{/*esto es un fragment*/} 
        <nav className="btn-primary">

            <h1>VeoVeo</h1>
            <ul className="containerList">
                <li>
                     <a href="#">Marcas</a>
                </li>
                <li>
                     <a href="#">Contacto</a>
                </li>
                <li>
                     <a href="#">Nosotros</a>
                </li>
                
            </ul>
            <FaCartArrowDown/>
        </nav>
    </>
    
   );
}
export default Navbar;