import React from "react";
import "./Contact.css";
import CloseIcon from "@mui/icons-material/Close";

const Contact = (props) => {
  const { contactAnimation, closeForm } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    closeForm();
    alert("Message Sent!");
  };
  return (
    <form className={`contact ${contactAnimation}`} onSubmit={handleSubmit}>
      <div className="contactFormHead">
        <h2>Contact us</h2>
        <span onClick={closeForm} className="closeButton">
          <CloseIcon />
        </span>
      </div>
      <input placeholder="Name" required />
      <input placeholder="Email" required />
      <textarea placeholder="Write your message here..." required />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
