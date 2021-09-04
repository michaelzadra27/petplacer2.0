import React from "react";
import "./navbar2.css";

const Navbar2 = () => {

    //const [optionValue, setOptionValue] = useState("");
    
    const handleSelect = (e) => {
      console.log(e.target.value);
      //setOptionValue(e.target.value);
    };


    return ( 
        <div className="navbar2">
            <div className="dropdown" onchange={handleSelect}>
                <button className="dropbtn">Breed</button>
                <select className="dropdown-content" onchange={handleSelect}>
                <option value = 'oh No'>Oh No</option>
                <option value ="2"> two </option>
                <p>This Part Will Be...</p>
                <p>...Complicated</p>
                </select>
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