import "./mymatches.css"

const MyMatches = () => {
    return ( 
        <div className="myMatches">
        <div className="matchCard">
        <h4>My Matches</h4>
        <div className="matchedPets">
            <div className="smallMatchCard"></div>
            <p className="matchedInfo">Matched Pet Info</p>
        </div>
    </div>
    <div className="selections">
        <button className="back-button match">Back</button>
    </div>
    
</div>
     );
}
 
export default MyMatches;