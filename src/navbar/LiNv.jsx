import { Link } from "react-router-dom";
const LiNv =()=>{
    return(
        <ul className='containerList'>
        <li>
            <Link className='list' to="/category/10">Lenses</Link>
        </li>
        <li>
            <Link className='list' to="/category/20">Contact Lenses</Link>
        </li>
        <li>
            <Link className='list' to="/category/30">Sun</Link>
        </li>
    </ul>
    )
}
export default LiNv;