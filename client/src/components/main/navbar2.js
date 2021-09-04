import "./navbar2.css";

const Navbar2 = () => {
    return ( 
        <div className="navbar2">
            <div class="dropdown">
    <button class="dropbtn">Breed
    </button>
    <div class="dropdown-content">
      <a href="#">Breed 1</a>
      <a href="#">Breed 2</a>
      <a href="#">Breed 3</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">Sex
    </button>
    <div class="dropdown-content">
      <a href="#">Male</a>
      <a href="#">Female</a>
      <a href="#">No Preference</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">Location
    </button>
    <div class="dropdown-content">
      <a href="#">California</a>
      <a href="#">Florida</a>
      <a href="#">Massachusetts</a>
    </div>
  </div>
            <div className="linkAccounts">
                <p>Link Accounts</p>
            </div>
            <div className="searchButton">
            <button className="search-button">Search</button>
            </div>
        </div>
     );
}
 
export default Navbar2;