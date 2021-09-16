import "./mylikes.css"
import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LIKES } from '../../utils/queries'
import { FIND_LIKE } from '../../utils/queries'
import LikeCard from './likeCard'

// var dogName = "Ruben"
// var dogPhotoApi = "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52506384/5/?bust=1631388396&width=600"
// var description = "Cute and playful little guy. Ready for their forever home. \n\nTo adopt please apply online at foac.us"
// var dogURL = "https://www.petfinder.com/dog/cheyenne-52978230/ca/madera/madera-county-animal-control-ca628/?referrer_id=c214bc92-08ab-4f73-985b-d06bda77705e"
// var contactEmail = "AnimalControl2@Madera-County.com"
// var contactCity = "Sacramento"

const MyLikes = () => {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++")

    const {loading, data} = useQuery(FIND_LIKE)
    console.log(data)
    // const [likeData, setLikeData] = useState(data.findLike)
    // console.log(likeData)
// const [dogPhotoApi, setPhotoApi] = useState('')
// const [dogURL, setDogURL] = useState('')
// const [contactEmail, setEmail] = useState('')
// const [dogName, setName] = useState('Dog Name');
// const [description, setDescription] = useState('')
// const [contactCity, setCity] = useState('')
    function renderCard(data){
        if(data){
            console.log("in if")
            
            return data.findLike.map((dog, i)=><LikeCard key={i} dogdata = {dog}/>)
        }
        else{
            return
        }
    }

    return (
        <div className="myLikes">
            <h4 className="likeTitle">My Likes</h4>
            {renderCard(data)}

            {/* <div className="likeCard">
                <h3 className="likedInfo">{data.findLike[0].dogName}</h3>
                <div className="likedPets">
                    <img src={data.findLike[0].dogPhotoApi} className="smallLikeCard" />
                    <div>
                        <p className="desc">{data.findLike[0].contactEmail}</p>
                        <p className="desc">{data.findLike[0].contactCity}</p>
                        <p className="desc">{data.findLike[0].description}</p>
                    </div>
                </div>
                <div>
                    <p className="desc">{data.findLike[0].dogURL}</p>
                </div>
            </div> */}
            <div className="selections">
                <button className="back-button like">Back</button>
            </div>

        </div>
    );
}

export default MyLikes;