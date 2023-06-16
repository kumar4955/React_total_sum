// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./Components/Login";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <>
//       <h1>hello</h1>

//       <Navbar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="login" element={<Login />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import "./App.css";
// import Footer from "./components/Footer";
import Calculation from "./components/Calculation";
// Define MobileMenu component
const MobileMenu = () => {
  return (
    <div className={"mobile-menu"}>
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#shop">Shop</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#privacy">Privacy Policy</a>
    </div>
  );
};

function App() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className="topnav">
        {/* Your Logo/Brand here */}
        <div className="logo">
          RIWAJ<span>BOYS HOSTEL</span>
        </div>

        {/* Desktop Menu, which only appears on large screens */}
        <div className="menu">
          <a href="#home" className="active-link">
            Home
          </a>
          <a href="#news">About Us</a>
          <a href="#shop">Our Team</a>
          <a href="#contact">Services</a>
          <a href="#about">Contact</a>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>
      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
      {/* Dummy content */}
      <div className="content">
        <h2>Welcome to Riwaj Boys Hostel</h2>
        <p>Responsive top navigation bar with React and pure CSS</p>
      </div>
      {/* <Footer />; */}
      <Calculation />
    </>
  );
}

export default App;
