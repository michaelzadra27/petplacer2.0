import "./mymatches.css"
import { useQuery } from "@apollo/react-hooks";
import { GET_MATCHES } from "../../utils/queries";
import { useState, useEffect } from 'react'
import Logo from "../../../src/petplacer2.png"
import MatchCard from './matchCard'




const MyMatches = () => {
    console.log("in matches")
    const { loading, data, refetch } = useQuery(GET_MATCHES)
    console.log(data)




        // const [cardData, dataSet] = useState([])
      
        // useEffect(() => {
        //   async function fetchMyAPI() {
        //     let response = await refetch()
        //     console.log(response)
        //     dataSet(response)
        //   }
      
        //   fetchMyAPI()
        // }, [])

    
    function renderCard(data){
        if(data){
            console.log("in if")
            
            return data.getMatches.map((dog, i)=><MatchCard key={i} dogdata = {dog}/>)
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