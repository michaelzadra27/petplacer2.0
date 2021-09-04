import "./signup.css";

const Signup = () => {
    return (
        <div className="signupForm">
            <div className="card">
            <h2>Create an Account</h2>
                <form>
                <label>Username</label>
                <input
                    type = "text"
                    required
                />
                <label>Email</label>
                <input
                    type = "text"
                    required
                />
                <label>Password</label>
                <input
                    type = "text"
                    required
                />
                <button className="create-account-button">Create Account</button>        
                </form>
            </div>
        </div>
      );
    }
    
export default Signup;