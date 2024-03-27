import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import "../../App.css";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Contact from "../Contact/Contact";

const Navbar = () => {
  const [contactPage, setContactPage] = useState(false);
  const [contactAnimation, setContactAnimation] = useState("pageOut");
  //functions
  const handleContact = () => {
    if (!contactPage) setContactPage(true);

    contactAnimation === "pageOut"
      ? setContactAnimation("pageIn")
      : setContactAnimation("pageOut");
  };

  return (
    <nav className="common-padding">
      <a href="/" className="logoSpan">
        <Logo />
      </a>
      <span className="linksList linksList-large">
        <a href="#home">home</a>
        <a href="#attorneys">attorneys</a>
        <a href="#practiceAreas">practice areas</a>
        <a href="#about">about us</a>
      </span>
      <span
        onClick={handleContact}
        className="contactUsButtonContainer contactUsButtonContainer-large"
      >
        <a href="#contact" className="contactUsButton">
          contact us
        </a>
      </span>
      <NavbarMenu handleContact={handleContact}></NavbarMenu>
      {contactPage ? (
        <Contact
          contactAnimation={contactAnimation}
          closeForm={handleContact}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
