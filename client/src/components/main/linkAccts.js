import "./linkAccts.css"

const LinkAccts = () => {
    return ( 
        <div className="findAccts">
            <div className="linkCard">
            <h4 className="title">Join a Group</h4>
            <div className="acctForm">
                <form className="linkForm">
                    <label>Search for Group</label>
                    <input
                        type = "text"
                        required
                    /> 
                </form>
                <button className="linkSearchBtn">Search</button>   
            </div>
        <div className="linkResults">
            <p className="emailResults">Groups display here</p>
            <button className="linkResultBtn">Join</button>
        </div>
        <h4 className="title">Create a Group</h4>
            <div className="acctForm">
                <form className="linkForm">
                    <label>Create a Group</label>
                    <input
                        type = "text"
                        required
                    /> 
                </form>
                <button className="createGroupBtn">Create</button>   
            </div>
        <div className="closeBtnDiv">
        <button className="closeLinkBtn">Close</button> 
        </div>
    </div>
    
</div>
     );
}
 
export default LinkAccts;