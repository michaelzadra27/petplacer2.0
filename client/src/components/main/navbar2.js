import React from "react";
import "./navbar2.css";
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import Home from "./home.js"

const key = "3m8nwrVMxrsMJ4n6XvooyVdxjqVRqKMLiiIrR036M3ynyptSbR"
const secret = "vT3chXJ3ddzDrpStykKDftVGJ55X1nCGDXPOJJNN"

const selections = {};

function getData() {
    
    const getToken = async () => {

        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        params.append("client_id", key);
        params.append("client_secret", secret);
        const petRes = await fetch(
            "https://api.petfinder.com/v2/oauth2/token",
            {
                method: "POST",
                body: params,
            }
        );
        const data = await petRes.json();
        apiCall(data.access_token)
    };
    
    getToken();
    function apiCall(access_token) {
        //Conditionally Call the API based on if there was a sex selected or not
        if (selections.sex === "Any") {
            fetch(
                `https://api.petfinder.com/v2/animals?type=dog&breed=${selections.breed}&location=${selections.location}`,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (data1) {
                    console.log(data1)
                })
        }
        else {
            fetch(
                `https://api.petfinder.com/v2/animals?type=dog&breed=${selections.breed}&sex=${selections.sex}&location=${selections.location}`,
                {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                }
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (data1) {
                    console.log(data1)
                })
        };
    };
}


const Navbar2 = () => {
    //Function handlers for the different dropdowns to get selected values into object
    const handleBreed = (e) => {
        console.log(e)
        selections.breed = e
        console.log(selections)
    };

    const handleSex = (e) => {
        console.log(e)
        selections.sex = e
        console.log(selections)
    };
    const handleLocation = (e) => {
        console.log(e)
        selections.location = e
        console.log(selections)
    };


    return (
        <div>
        <div className="navbar2">
            <>
                <DropdownButton
                    className="dropBtn"
                    as={ButtonGroup}
                    key={"Breed"}
                    // id={`dropdown-variants-${variant}`}
                    title={"Breed"}
                    onSelect={handleBreed}
                >
                    <Dropdown.Item eventKey="Beagle">Beagle</Dropdown.Item>
                    <Dropdown.Item eventKey="Border Collie">Border Collie</Dropdown.Item>
                    <Dropdown.Item eventKey="Boxer">Boxer</Dropdown.Item>
                    <Dropdown.Item eventKey="Dachshund">Dachshund</Dropdown.Item>
                    <Dropdown.Item eventKey="Golden Retriever">Golden Retriever</Dropdown.Item>
                    <Dropdown.Item eventKey="Labrador Retriever">Labrador Retriever</Dropdown.Item>
                    <Dropdown.Item eventKey="Poodle">Poodle</Dropdown.Item>
                    <Dropdown.Item eventKey="Pug">Pug</Dropdown.Item>
                    <Dropdown.Item eventKey="Rottweiler">Rottweiler</Dropdown.Item>
                    <Dropdown.Item eventKey="Yorkshire Terrier">Yorkshire Terrier</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    className="dropBtn"
                    as={ButtonGroup}
                    key={"Sex"}
                    // id={`dropdown-variants-${variant}`}
                    title={"Sex"}
                    onSelect={handleSex}
                >
                    <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                    <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
                    <Dropdown.Item eventKey="Any">Any</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    className="dropBtn"
                    as={ButtonGroup}
                    key={"Location"}
                    // id={`dropdown-variants-${variant}`}
                    title={"Location"}
                    onSelect={handleLocation}
                >
                    <Dropdown.Item eventKey="California">California</Dropdown.Item>
                    <Dropdown.Item eventKey="Colorado">Colorado</Dropdown.Item>
                    <Dropdown.Item eventKey="Florida">Florida</Dropdown.Item>
                    <Dropdown.Item eventKey="Georgia">Georgia</Dropdown.Item>
                    <Dropdown.Item eventKey="Illinois">Illinois</Dropdown.Item>
                    <Dropdown.Item eventKey="Michigan">Michigan</Dropdown.Item>
                    <Dropdown.Item eventKey="New York">New York</Dropdown.Item>
                    <Dropdown.Item eventKey="Ohio">Ohio</Dropdown.Item>
                    <Dropdown.Item eventKey="Pennsylvania">Pennsylvania</Dropdown.Item>
                    <Dropdown.Item eventKey="Texas">Texas</Dropdown.Item>
                </DropdownButton>
            </>

            <div className="linkAccounts">
                <p>Link Accounts</p>
            </div>
            <div className="searchButton">
                <button className="search-button" onClick={getData}>Search</button>
            </div>
        </div>
        <Home/>
        </div>
        

    );
}

export default Navbar2;