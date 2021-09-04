import React from "react";
import "./navbar2.css";
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';


const Navbar2 = () => {    
    const handleSelect = (e) => {
      console.log(e.target.value);
    };


    return ( 
        <div className="navbar2">
            <>
                  <DropdownButton
                    className="dropBtn"
                    as={ButtonGroup}
                    key={"Breed"}
                    // id={`dropdown-variants-${variant}`}
                    title={"Breed"}
                    onSelect={handleSelect}
                  >
                    <Dropdown.Item eventKey="Breed1">Breed 1</Dropdown.Item>
                    <Dropdown.Item eventKey="Breed2">Breed 2</Dropdown.Item>
                    <Dropdown.Item eventKey="Breed3">Breed 3</Dropdown.Item>
                    <Dropdown.Item eventKey="Breed4">Breed 4</Dropdown.Item>
                  </DropdownButton>

                  <DropdownButton
                    className="dropBtn"
                    as={ButtonGroup}
                    key={"Sex"}
                    // id={`dropdown-variants-${variant}`}
                    title={"Sex"}
                    onSelect={handleSelect}
                  >
                    <Dropdown.Item eventKey="Sex1">Male</Dropdown.Item>
                    <Dropdown.Item eventKey="Sex2">Female</Dropdown.Item>
                    <Dropdown.Item eventKey="Sex3">No Preference</Dropdown.Item>
                  </DropdownButton>
                  
                  <DropdownButton
                    className="dropBtn"
                    as={ButtonGroup}
                    key={"Location"}
                    // id={`dropdown-variants-${variant}`}
                    title={"Location"}
                    onSelect={handleSelect}
                  >
                    <Dropdown.Item eventKey="Location1">State 1</Dropdown.Item>
                    <Dropdown.Item eventKey="Location2">State 2</Dropdown.Item>
                    <Dropdown.Item eventKey="Location3">State 3</Dropdown.Item>
                    <Dropdown.Item eventKey="Location4">State 4</Dropdown.Item>
                  </DropdownButton>
                  </>
   
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