import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landingpage from "./pages/Landingpage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"
import Details from "./pages/Details"
import Profile from "./pages/Profile"
import EditBook from "./pages/EditBook"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home/:user" element={<Home/>} />
        <Route path="/details/:user/:id" element={<Details/>}/>
        <Route path="/edit/:user/:id" element={<EditBook/>} />
        <Route path="/profile/:user" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
