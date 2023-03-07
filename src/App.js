import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NewAccountingEntry from "./pages/NewAccountingEntry";
import SearchEntry from "./pages/SearchEntry";
import Alerts from "./pages/Alerts";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/newAccountingEntry" element={<NewAccountingEntry />}></Route>
          <Route path="/searchEntry" element={<SearchEntry />}></Route>
          <Route path="/alerts" element={<Alerts />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;