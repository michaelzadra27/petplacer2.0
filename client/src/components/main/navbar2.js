import "./navbar2.css";

const Navbar2 = () => {
    return ( 
        <div className="navbar2">
            <div className="dropdown">
                <button className="dropbtn">Breed</button>
                <div className="dropdown-content">
                <p>Oh No</p>
                <p>This Part Will Be...</p>
                <p>...Complicated</p>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Sex</button>
                <div className="dropdown-content">
                <p>Male</p>
                <p>Female</p>
                <p>Undecided</p>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Location</button>
                <div className="dropdown-content">
                <p>Sacramento</p>
                <p>Los Angeles</p>
                <p>San Diego</p>
                </div>
            </div>
            <div className="linkAccounts">
                <p>Link Accounts</p>
            </div>
            <div className="searchButton">
            <button className="search-button">Search</button>
            </div>
        </div>
     );
}
 
export default Navbar2;