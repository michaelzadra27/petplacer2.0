import "./mymatches.css"
import Logo from "../../../src/petplacer2.png"

const MyMatches = () => {
    return ( 
        <div className="myMatches">
        <div className="matchCard">
        <h4>My Matches</h4>
        <div className="matchedPets">
            <div>
            <img className="smallMatchCard" src={Logo} alt="Pet Placer Logo"></img>
            </div>
            <p className="matchedInfo">"dogName" dynamic input - MATCHES</p>
        </div>
    </div>
    <div className="selections">
        <button className="back-button match">Back</button>
    </div>
    
</div>
     );
}
 
export default MyMatches;