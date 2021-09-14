import "./navbar.css";
import Logo from "../../../src/petplacer2.png"
import { Link } from "react-router-dom";
import Auth from '../../utils/auth'

const Navbar = () => {
    return ( 
        <div className="navbar">
            
            <img className="petLogo" src={Logo} alt="Pet Placer Logo"></img>
            <h3><Link to = "/navbar2" style={{ textDecoration: 'none', color: "white" }}>Pet Placer</Link></h3>
            <div className="links">
                <p className="logout"><Link to = "/login" style={{ textDecoration: 'none', color: "white" }} onClick={() => Auth.logout()}>Logout</Link></p>
                <p className="matching"><Link to = "/mylikes" style={{ textDecoration: 'none', color: "white" }}>My Likes</Link></p>
                <p className="matching"><Link to = "/mymatches" style={{ textDecoration: 'none', color: "white" }}>My Matches</Link></p>
            </div>
        </div>
     );
}
 
export default Navbar;