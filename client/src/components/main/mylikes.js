import "./mylikes.css"
import Logo from "../../../src/petplacer2.png"

const MyLikes = () => {
    return ( 
        <div className="myLikes">
        <div className="likeCard">
        <h4>My Likes</h4>
        <div className="likedPets">
            <div>
            <img className="smallLikeCard" src={Logo} alt="Pet Placer Logo"></img>
            </div>
            <p className="likedInfo">"dogName" dynamic input - LIKES</p>
        </div>
    </div>
    <div className="selections">
        <button className="back-button like">Back</button>
    </div>
    
</div>
     );
}
 
export default MyLikes;