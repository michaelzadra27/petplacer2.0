import "./mymatches.css"

import { useQuery } from "@apollo/client";
import { GET_MATCHES } from "../../utils/queries";
import Logo from "../../../src/petplacer2.png"



const MyMatches = () => {
    const { loading, data } = useQuery(GET_MATCHES)
    console.log(data)

    var dogName = "Ruben"
    var dogPhotoApi = "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52506384/5/?bust=1631388396&width=600"
    var description = "Cute and playful little guy. Ready for their forever home. \n\nTo adopt please apply online at foac.us"
    var dogURL = "https://www.petfinder.com/dog/cheyenne-52978230/ca/madera/madera-county-animal-control-ca628/?referrer_id=c214bc92-08ab-4f73-985b-d06bda77705e"
    var contactEmail = "AnimalControl2@Madera-County.com"
    var contactCity = "Sacramento"

    // const [dogPhotoApi, setPhotoApi] = useState('')
    // const [dogURL, setDogURL] = useState('')
    // const [contactEmail, setEmail] = useState('')
    // const [dogName, setName] = useState('Dog Name');
    // const [description, setDescription] = useState('')
    // const [contactCity, setCity] = useState('')
    return (
        <div className="myMatches">
            <h4 className="matchTitle">My Matches</h4>
            {/* Match card with info */}
            <div className="matchCard">
                <h3 className="likedInfo">{dogName}</h3>
                <div className="matchedPets">
                    <img src={dogPhotoApi} className="smallLikeCard" />
                        <div>
                            <p className="desc">{contactEmail}</p>
                            <p className="desc">{contactCity}</p>
                            <p className="desc">{description}</p>
                        </div>
                    </div>
                    <div>
                        <p className="desc">{dogURL}</p>
                </div>
            </div>
            <div className="selections">
                <button className="back-button match">Back</button>
            </div>

        </div>
    );
}

export default MyMatches;