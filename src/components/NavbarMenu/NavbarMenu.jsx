import React, { useState } from "react";
import menuButton from "../../assets/navbarMenu.svg";
import "./NavbarMenu.css";

const NavbarMenu = (props) => {
  const { handleContact } = props;
  const [isOpen, setIsopen] = useState(false);

  const toggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const handleContactClick = () => {
    toggleSidebar();
    handleContact();
  };

  return (
    <>
      <section className="menuButton">
        <img
          src={menuButton}
          alt="menu button"
          className={""}
          onClick={toggleSidebar}
        />
      </section>
      <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
        <div className="sd-body">
          <ul>
            <li>
              <a onClick={toggleSidebar} href="#home" className="sd-link">
                Home
              </a>
            </li>
            <li>
              <a onClick={toggleSidebar} href="#attorneys" className="sd-link">
                attorneys
              </a>
            </li>
            <li>
              <a
                onClick={toggleSidebar}
                href="#practiceAreas"
                className="sd-link"
              >
                practice Areas
              </a>
            </li>
            <li>
              <a onClick={toggleSidebar} href="#about" className="sd-link">
                about
              </a>
            </li>
            <li>
              <a
                onClick={handleContactClick}
                href="#contact"
                className="sd-link"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default NavbarMenu;
