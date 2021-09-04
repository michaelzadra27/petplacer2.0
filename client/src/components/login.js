import "./login.css";

const Login = () => {
    return (
        <div className="loginForm">
            <div className="card">
            <h2>Welcome to Pet Placer</h2>
                <form>
                <label>Username</label>
                <input
                    type = "text"
                    required
                />
                <label>Password</label>
                <input
                    type = "text"
                    required
                />
                <button className="login-button">Log In</button>
                <button className="signup-button">Not a Member? Sign Up Here</button>        
                </form>
            </div>
        </div>
      );
    }
    
export default Login;