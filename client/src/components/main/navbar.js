import "./navbar.css";
import Logo from "../../../src/petplacer2.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            
            <img className="petLogo" src={Logo} alt="Pet Placer Logo"></img>
            <h3><Link to = "/" style={{ textDecoration: 'none', color: "white" }}>Pet Placer</Link></h3>
            <div className="links">
                <p className="logout">Log Out</p>
                <p className="matching"><Link to = "/mylikes" style={{ textDecoration: 'none', color: "white" }}>My Likes</Link></p>
                <p className="matching"><Link to = "/mymatches" style={{ textDecoration: 'none', color: "white" }}>My Matches</Link></p>
            </div>
        </div>
     );
}
 
export default Navbar;