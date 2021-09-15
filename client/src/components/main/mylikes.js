import "./mylikes.css"
import Logo from "../../../src/petplacer2.png"
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LIKES } from '../../utils/queries'
import { FIND_LIKE } from '../../utils/queries'

var dogName = "Ruben"
var dogPhotoApi = "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52506384/5/?bust=1631388396&width=600"
var description = "Cute and playful little guy. Ready for their forever home. \n\nTo adopt please apply online at foac.us"
var dogURL = "https://www.petfinder.com/dog/cheyenne-52978230/ca/madera/madera-county-animal-control-ca628/?referrer_id=c214bc92-08ab-4f73-985b-d06bda77705e"
var contactEmail = "AnimalControl2@Madera-County.com"
var contactCity = "Sacramento"

const MyLikes = () => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
    // const {loading, data} = useQuery(GET_LIKES)

    const {loading, data} = useQuery(FIND_LIKE)
    console.log(data)

// const [dogPhotoApi, setPhotoApi] = useState('')
// const [dogURL, setDogURL] = useState('')
// const [contactEmail, setEmail] = useState('')
// const [dogName, setName] = useState('Dog Name');
// const [description, setDescription] = useState('')
// const [contactCity, setCity] = useState('')

    return (
        <div className="myLikes">
            <h4>My Likes</h4>
            <div className="likeCard">
                <h3 className="likedInfo">{dogName}</h3>
                <div className="likedPets">
                    <div>
                        <img src={dogPhotoApi} className="smallLikeCard" />
                        <p className="desc">{contactEmail}</p>
                        <p className="desc">{contactCity}</p>
                        <p className="desc">{dogURL}</p>
                        <p className="desc">{description}</p>
                    </div>
                </div>
            </div>
            <div className="likeCard">
                <h3 className="likedInfo">{dogName}</h3>
                <div className="likedPets">
                    <div>
                        <img src={dogPhotoApi} className="smallLikeCard" />
                        <p className="desc">{contactEmail}</p>
                        <p className="desc">{contactCity}</p>
                        <p className="desc">{dogURL}</p>
                        <p className="desc">{description}</p>
                    </div>
                </div>
            </div>
            <div className="likeCard">
                <h3 className="likedInfo">{dogName}</h3>
                <div className="likedPets">
                    <img src={dogPhotoApi} className="smallLikeCard" />
                    <p className="desc">{description}</p>
                </div>
            </div>
            <div className="selections">
                <button className="back-button like">Back</button>
            </div>

        </div>
    );
}

export default MyLikes;