import "./linkAccts.css"

const LinkAccts = () => {
    return ( 
        <div className="findAccts">
            <div className="linkCard">
            <h4>Link An Account</h4>
            <div className="acctForm">
                <form className="linkForm">
                    <label>Search by Email</label>
                    <input
                        type = "text"
                        required
                    /> 
                </form>
                <button className="linkSearchBtn">Search</button>   
            </div>
        <div className="linkResults">
            <p className="emailResults">Accounts display here</p>
            <button className="linkResultBtn">Link</button>
        </div>
        <div className="closeBtnDiv">
        <button className="closeLinkBtn">Close</button> 
        </div>
    </div>
    
</div>
     );
}
 
export default LinkAccts;