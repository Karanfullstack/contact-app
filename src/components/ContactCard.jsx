import {deleteDoc, doc} from "firebase/firestore";
import React from "react";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import {db} from "../config/firebaseConfig";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdate from "./AddAndUpdate";
import {toast} from "react-hot-toast";

//@to delete document
const ContactCard = ({contact}) => {
  const {isOpen, onOpen, onClose} = useDisclouse();
  const deleteContact = async (ID) => {
    try {
      await deleteDoc(doc(db, "contacts", ID));
      toast.success("User Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  // @End of Delete Document
  return (
    <div>
      <div
        key={contact.id}
        className=" bg-white flex justify-between items-center my-3 rounded-lg py-1"
      >
        <div className="flex items-center gap-5">
          <HiOutlineUserCircle className="text-4xl ml-2" />
          <div className="text-lg">
            <h2>
              <strong>Name:</strong> {contact.name}
            </h2>
            <p>
              <strong>Email: </strong> {contact.email}
            </p>
          </div>
        </div>
        <div className="text-3xl flex gap-2 mr-2">
          <RiEditCircleLine onClick={onOpen} className=" cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className=" cursor-pointer"
          />
        </div>
      </div>

      <AddAndUpdate
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
        contact={contact}
      />
    </div>
  );
};

export default ContactCard;
