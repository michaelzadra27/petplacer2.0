import "./mylikes.css"

const MatchCard = (props) => {
    console.log("in match card")
    console.log(props)
    const dog = props.dogdata
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
                <a className="desc" href={dog.dogURL}>{dog.dogURL}</a>
            </div>
        </div>
    )
}

export default MatchCard