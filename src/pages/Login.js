import NavBar from "../components/Navbar";

function Login() {
    return (
        <>
            <NavBar></NavBar>
            <LoginForm></LoginForm>
        </>
    );
}

function LoginForm() {
  return (
    <>
    <div className="container login-form">
        <div className="text-center">
          <h5>Login</h5>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="emailLoginInput" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="emailLoginInput" aria-describedby="emailHelp"></input>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="passwordLoginInput" className="form-label">Password</label>
            <input type="password" className="form-control" id="passwordLoginInput"></input>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;