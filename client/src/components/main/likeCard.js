import "./mylikes.css"

const likeCard = (props) => {
    console.log("in card")
    const dog = props.dogdata
    console.log(dog)
    return(
        <div className="likeCard">
            <h3 className="likedInfo">{dog.dogName}</h3>
            <div className="likedPets">
                <img src={dog.dogPhotoApi} className="smallLikeCard" />
                <div>
                    <p className="desc">{dog.contactEmail}</p>
                    <p className="desc">{dog.contactCity}</p>
                    <p className="desc">{dog.description}</p>
                </div>
            </div>
            <div>
                <p className="desc">{dog.dogURL}</p>
            </div>
        </div>
    )
}

export default likeCard