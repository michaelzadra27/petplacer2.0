import "./mymatches.css"
import { useQuery } from "@apollo/react-hooks";
import { GET_MATCHES } from "../../utils/queries";
import Logo from "../../../src/petplacer2.png"
import LikeCard from './likeCard'




const MyMatches = () => {
    const { loading, data } = useQuery(GET_MATCHES)
    console.log(data)

    
    function renderCard(data){
        if(data){
            console.log("in if")
            console.log(data)
            return data.getMatches.map((dog, i)=><LikeCard key={i} dogdata = {dog}/>)
        }
        else{
            return
        }
    }

    return (
        <div className="myMatches">
            <h4 className="matchTitle">My Matches</h4>
            {renderCard(data)}

            <div className="selections">
                <button className="back-button match">Back</button>
            </div>

        </div>
    );
}

export default MyMatches;