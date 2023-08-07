import React from "react";
import Model from "./Model";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {addDoc, collection, doc, updateDoc} from "firebase/firestore";
import {db} from "../config/firebaseConfig";
import {toast} from "react-hot-toast";
import * as Yup from "yup";
const AddAndUpdate = ({isOpen, onClose, isUpdate, contact}) => {
  //@To Create User Data
  const addContacts = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("User Added");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  // @End To Create User Data

  //@Update Contact
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("User Updated");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
  });

  return (
    <Model isOpen={isOpen} onClose={onClose}>
      <Formik
        validationSchema={validationSchema}
        initialValues={
          isUpdate
            ? {
                name: contact.name,
                email: contact.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          isUpdate ? updateContact(values, contact.id) : addContacts(values);
          console.log(values);
        }}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label className="mb-1" htmlFor="name">
              Name
            </label>
            <Field
              name="name"
              className="border h-10 pl-2 rounded-lg"
              placeholder="Enter Name"
            />
            <div className=" text-red-500">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1" htmlFor="email">
              Email
            </label>
            <Field
              name="email"
              className="border h-10 pl-2 rounded-lg"
              placeholder="Enter Email"
            />
            <div className=" text-red-500">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border bg-slate-900 text-white py-2 px-5 rounded-lg"
            >
              {isUpdate ? "Update" : "ADD"}
            </button>
          </div>
        </Form>
      </Formik>
    </Model>
  );
};

export default AddAndUpdate;
