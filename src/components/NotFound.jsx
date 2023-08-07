import React from "react";
import logo from "../assets/Hands Contact.png";
const NotFound = () => {
  return (
    <div className="flex gap-3 justify-center items-center h-[30vh]">
      <img src={logo} alt="contact-logo" />
      <h2 className="text-white font-medium">Contact Not Found</h2>
    </div>
  );
};

export default NotFound;
