import React, {useEffect, useState} from "react";
import {Toaster} from "react-hot-toast";
import Navbar from "./components/Navbar";
import {collection, getDocs, onSnapshot} from "firebase/firestore";
import {db} from "./config/firebaseConfig";
import Search from "./components/Search";
import ContactCard from "./components/ContactCard";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclouse from "./hooks/useDisclouse";
import NotFound from "./components/NotFound";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclouse(); // Custom Hook

  // This code is for fetch data from firebase
  useEffect(() => {
    const getContacts = async () => {
      try {
        const ContactsRefrence = collection(db, "contacts");

        onSnapshot(ContactsRefrence, (snapshot) => {
          const response = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
            f;
          });
          setContacts(response);
          return response;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  // @Firebase Fetch End

  // Filter User

  const filterContacts = (event) => {
    const value = event.target.value;
    const ContactsRefrence = collection(db, "contacts");

    onSnapshot(ContactsRefrence, (snapshot) => {
      const response = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
        f;
      });
      const filteredContacts = response.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts);
      return filteredContacts;
    });
  };
  return (
    <div className=" max-w-[370px] m-auto ">
      <Toaster position="top-center" />
      <Navbar />
      <Search onOpen={onOpen} filterContacts={filterContacts} />
      {contacts.length <= 0 ? (
        <NotFound />
      ) : (
        contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.id} />
        ))
      )}
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default App;
