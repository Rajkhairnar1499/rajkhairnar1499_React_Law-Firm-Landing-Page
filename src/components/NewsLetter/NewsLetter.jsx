import React from "react";
import "./NewsLetter.css";
import "../../App.css";

const NewsLetter = () => {
  return (
    <section className="common-padding newsLetter-wrapper">
      <section className="newsLetter">
        <h2 className="common-h2">Subscribe Our Newsletter</h2>
        <form onSubmit={(e) => e.preventDefault()} className="newsLetterForm">
          <input placeholder="Name:" className="newsLetter-input1" />
          <input placeholder="Enter your Email" />
          <button type="submit">send</button>
        </form>
      </section>
    </section>
  );
};

export default NewsLetter;
