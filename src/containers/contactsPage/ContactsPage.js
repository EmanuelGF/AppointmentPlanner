import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const { contacts, addContact } = props;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [nameDuplicate, setNameDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameDuplicate) {
      addContact({
        name: name,
        phone: phone,
        email: email,
      });
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("This contact name already exists!!")
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setNameDuplicate(contacts.find((contact) => contact.name === name) !== undefined ? true : false);   
  }, [name]);

  return (
    <div>
      <section>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />

        
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objList={contacts} />
      </section>
    </div>
  );
};
