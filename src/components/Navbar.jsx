import React from "react";
import logo from "../assets/logos_firebase.svg";
const Navbar = () => {
  return (
    <nav className="flex h-[60px] bg-white my-3 rounded-lg items-center justify-center gap-2 text-xl">
      <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
      <h1>Firebase Contact App</h1>
    </nav>
  );
};

export default Navbar;
