import React from "react";

export const ContactPicker = (props) => {
  const { contacts, handleContactChange } = props;
  return (
    <select onChange={handleContactChange} name="contacts" id="contacts">
      <option defaultValue >No contact selected</option>
      {contacts &&
        contacts.map((contact) => {
          return <option value={contact.name}>{contact.name}</option>;
        })}
    </select>
  );
};
