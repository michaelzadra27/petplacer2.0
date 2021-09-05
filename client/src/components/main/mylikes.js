import "./mylikes.css"

const MyLikes = () => {
    return ( 
        <div className="myLikes">
        <div className="likeCard">
        <h4>My Likes</h4>
        <div className="likedPets">
            <div className="smallLikeCard"></div>
            <p className="likedInfo">Liked Pet Info</p>
        </div>
    </div>
    <div className="selections">
        <button className="back-button like">Back</button>
    </div>
    
</div>
     );
}
 
export default MyLikes;