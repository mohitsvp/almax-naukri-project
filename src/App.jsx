import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./page/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import AuthNavbar from "./components/Navbar/AuthNavbar";
import Register from "./page/Register";
import Login from "./page/Login";
import Jobs from "./page/Jobs";

function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      {
        user ? <Navbar/> : <AuthNavbar/>
      }
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
        </Routes>
      </Wrapper>
      <Footer/>
    </>
  );
}

export default App;
