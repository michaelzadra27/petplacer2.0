import "./navbar.css";
import Logo from "../../../src/petplacer2.png"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={Logo} alt="Pet Placer Logo"></img>
            <h3>Pet Placer</h3>
            <div className="links">
                <p>Log Out</p>
                <p>My Likes</p>
                <p>My Matches</p>
            </div>
        </div>
     );
}
 
export default Navbar;