import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddNewExpense from "./pages/AddNewExpense";
import SearchExpense from "./pages/SearchExpense";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addnewexpense" element={<AddNewExpense />}></Route>
          <Route path="/searchexpense" element={<SearchExpense />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>

      <NavBar></NavBar>
      <LoginForm></LoginForm>
    </>
  );
}

function LoginForm() {
  return (
    <>
    <div className="container test-custom">
        <form>
          <div className="mb-3">
            {/* <label for="emailLoginInput" className="form-label">Email address</label> */}
            <input type="email" className="form-control" id="emailLoginInput" aria-describedby="emailHelp"></input>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            {/* <label for="passwordLoginInput" className="form-label">Password</label> */}
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

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Expense Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/addnewexpense">Add New Expense</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/searchexpense">Search Expense</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/rules">Rules</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">About</a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">Login</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
