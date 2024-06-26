import React from "react";
import "./Home.css";
import "../../App.css";
import attorneyImage from "../../assets/FrontAttroneyImage.svg";
import MessageIcon from "../../assets/emailIcon.svg";

const Home = () => {
  return (
    <section className="home common-padding" id="home">
      <article className="homeTexts">
        <h1>
          <span>You don’t have to</span>
          <span className="h1-highlight">Fight them Alone.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <form className="">
          <span className="formPart1">
            <img src={MessageIcon} alt="email placeholder" />
            <input placeholder="Enter your email address" />
          </span>
          <button className="formButton">Let's Talk</button>
        </form>
      </article>
      <section className="homeImageContainer">
        <img src={attorneyImage} alt="main-attorney" />
      </section>
    </section>
  );
};

export default Home;
