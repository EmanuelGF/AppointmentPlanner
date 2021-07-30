import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const {
    contacts,
    title,
    setTitle,
    contact, // ??
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
  } = props;

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
  };

  const handleTimeChange = ({ target }) => {
    setTime(target.value);
  };

  const handleContactChange = ({ target }) => {
    setContact(target.value);
  };

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleTitleChange}
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="new contact title"
          required
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          onChange={handleDateChange}
          id="date"
          min={getTodayString()}
          name="date"
          value={date}
          required
        />

        <label htmlFor="time">Time</label>
        <input
          type="time"
          onChange={handleTimeChange}
          id="time"
          name="time"
          value={time}
          required
        />

        <label htmlFor="contact">Select a contact</label>
        <ContactPicker
          handleContactChange={handleContactChange}
          contacts={contacts}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
