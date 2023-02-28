import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
    return (
        <>
            <NavBar></NavBar>
            <RegisterForm></RegisterForm>
            <Footer></Footer>
        </>
    );
}

function RegisterForm() {
    return (
      <>
      <div className="container login-form">
        <div className="text-center">
            <h5>Create Your Account</h5>
        </div>
          <form className="p-3">
            <div className="mb-3">
              <label htmlFor="emailRegisterInput" className="form-label">Email Address: </label>
              <input type="email" className="form-control" id="emailRegisterInput" aria-describedby="emailHelp"></input>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
  
            <div className="mb-3">
              <label htmlFor="passwordRegisterInput" className="form-label">Password:</label>
              <input type="password" className="form-control" id="passwordRegisterInput"></input>
            </div>
            
            <div className="mb-3">
              <label htmlFor="confirmPasswordRegisterInput" className="form-label">Confirm Password:</label>
              <input type="password" className="form-control" id="confirmPasswordRegisterInput"></input>
            </div>
  
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </>
    );
  }

export default Register;