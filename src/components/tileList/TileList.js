import React from "react";

export const TileList = (props) => {
  const {contacts} = props
  console.log(contacts)

  //this is wrong... it shoul render the tiles. 
  return (
    <div style={{backgroundColor: "lightgray"}}>
      {contacts.map(contact => (
        <div key={contact.name}>
          <h4> Name:{contact.name} </h4>
          <p> Phone:{contact.phone} </p>
          <p> Email{contact.email} </p>
        </div>
      ))}
    </div>
  );
};
