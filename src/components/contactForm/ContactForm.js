import React from "react";

export const ContactForm = (props) => {
  const { name, setName, phone, setPhone, email, setEmail, handleSubmit } =
    props;

  const handleNameChange = ({target}) => {
    setName(target.value)
  }

  const handlePhoneChange = ({target}) => {
    setPhone(target.value)
  }

  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input onChange={handleNameChange} type="text" id="name" name="name" value={name} placeholder="new contact name" required />

        <label htmlFor="phone">Phone</label>
        <input onChange={handlePhoneChange} type="tel" id="phone" name="phone" value={phone} placeholder="new contact phone" pattern="^\d{9}$" required/>

        <label htmlFor="email">E-mail</label>
        <input onChange={handleEmailChange} type="email" id="email" name="email" value={email} placeholder="new contact email" required/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};
