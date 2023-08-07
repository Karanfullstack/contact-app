import React from "react";
import {createPortal} from "react-dom";
import {AiOutlineClose} from "react-icons/ai";
import {ImCross} from "react-icons/im";
const Model = ({isOpen, onClose, children}) => {
  return createPortal(
    isOpen && (
      <React.Fragment>
        <main className="relative  z-50  ">
          <div className="min-h-[200px] bg-white max-w-[370px] p-4 m-auto zoom-in-out-box rounded-lg fixed   top-40 left-0  right-0 ">
            <div className=" flex justify-end">
              <ImCross
                onClick={onClose}
                className="text-2xl cursor-pointer"
              />
            </div>
            {children}
          </div>
        </main>

        <div
          onClick={onClose}
          className=" backdrop-blur h-screen w-screen absolute top-0 z-60 rounded-md"
        />
      </React.Fragment>
    ),
    document.getElementById("model-root")
  );
};

export default Model;
