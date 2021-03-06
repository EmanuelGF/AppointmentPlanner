import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const {appointments, contacts, addAppointment} = props

  const [title, setTitle] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')


  const handleSubmit = (e) => {
    console.log("inside handle submit")
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment({
      title: title,
      contact: contact,
      date: date,
      time: time
    })
   setTitle('')
   setContact('')
   setDate('')
   setTime('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>

        <AppointmentForm
          contacts={contacts}
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
        
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>

        <TileList objList={appointments}/>
      </section>
    </div>
  );
};
