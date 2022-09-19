import { Link } from "react-router-dom";
const LiNv =()=>{
    return(
        <ul className='containerList'>
        <li>
            <Link className='list' to="/category/10">Lentes</Link>
        </li>
        <li>
            <Link className='list' to="/category/20">Lentes de Contacto</Link>
        </li>
        <li>
            <Link className='list' to="/category/30">Sol</Link>
        </li>
    </ul>
    )
}
export default LiNv;