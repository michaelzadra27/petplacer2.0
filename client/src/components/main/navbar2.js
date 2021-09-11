import React, { useState } from 'react';
import "./navbar2.css";
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';


const key = "3m8nwrVMxrsMJ4n6XvooyVdxjqVRqKMLiiIrR036M3ynyptSbR"
const secret = "vT3chXJ3ddzDrpStykKDftVGJ55X1nCGDXPOJJNN"

const selections = {};

var apiData = []
var dogs = apiData[0]

const Navbar2 = () => {

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
                    .then(function ({ animals }) {
                        
                        if (selections.sex === undefined && selections.breed === undefined && selections.location === undefined){
                            alert("Please select a Breed, Sex, and Location before searching")
                            return
                           }
                        if (selections.sex === undefined){
                            alert("Please select Sex")
                            return
                        }
                        if (selections.breed === undefined){
                            alert("Please select Breed")
                            return
                        }
                        if (selections.location === undefined){
                            alert("Please select Location")
                            return
                        }
                        apiData.push(animals)
                        // var dogs = apiData[0]
                        console.log(apiData)
                        //var dogs = apiData[0];
                        //var start = Math.floor(Math.random() * dogs.length)
                        RenderFirst()
                        
                    })
    
            };
        };
    }
    
   const RenderFirst = () => {
       
    var dogs = apiData[0];
    //Randomly start at one of the dogs returned
    var start = Math.floor(Math.random() * dogs.length)
    var dogIdApi = dogs[start].id
    var dogPhotoApi = dogs[start].photos[0].large
    var dogNameApi = dogs[start].name
    console.log(dogs[0])
    console.log(dogPhotoApi)
    console.log(dogIdApi)
    setName(dogNameApi) 
    setImage(dogPhotoApi)
   }

    //Setting up State to update NavBar with selections
    const [dogBreed, setBreed] = useState('Breed');
    const [dogSex, setSex] = useState('Sex');
    const [dogLocation, setLocation] = useState('Location');

    const [dogName, setName] = useState('Dog Name');
    const [dogImage, setImage] = useState('')

    //Function handlers for the different dropdowns to get selected values into object
    const handleBreed = (e) => {
        console.log(e)
        selections.breed = e;
        console.log(selections)
        setBreed(e);
    };

    const handleSex = (e) => {
        console.log(e)
        selections.sex = e
        console.log(selections)
        setSex(e);
    };
    const handleLocation = (e) => {
        console.log(e)
        selections.location = e
        console.log(selections)
        setLocation(e);
    };



    const CycleCards = () => {
    var dogs = apiData[0];
    console.log(dogs.length)
    //Randomly start at one of the dogs returned
    var i = Math.floor(Math.random() * dogs.length)
    var dogIdApi = dogs[i].id
    var dogPhotoApi = dogs[i].photos[0].large
    var dogNameApi = dogs[i].name

    
    setImage(dogPhotoApi)
    setName(dogNameApi)
    
    
    }


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
                <div className="selectionBar">
                    <p className="preSelect">Your search: </p>
                    <div className="selections">
                        {dogBreed}
                    </div>
                    <div className="selections">
                        {dogSex}
                    </div>
                    <div className="selections">
                        {dogLocation}
                    </div>
                </div>
                <div className="linkAccounts">
                    <p className="linkActs"><Link to = "/linkaccts" style={{ textDecoration: 'none', color: "white" }}>Link Groups</Link></p>
                </div>
                <div className="searchButton">
                    <button className="search-button"  onClick={getData}>Search</button>
                </div>
            </div>

            {/* Pet Display Cards */}
            <div className="petDisplay">
            
                <div className="card">
                <p className="petName">{dogName}</p>
                    <img src={dogImage} className="petMatchImg"/>
                </div>
                <div className="selectionBtns">
                    <button className="no-button" onClick={CycleCards}><Icon icon="fa:paw" rotate={2} /></button>
                    <button className="yes-button" onClick={CycleCards}><Icon icon="fa:paw" /></button>
                </div>

            </div>
        </div>



    );
}


export default Navbar2;
