import React from "react";
import "./PracticeAreas.css";
import "../../App.css";
import PracticeImg1 from "../../assets/practiceImg1.png";
import PracticeImg2 from "../../assets/practiceImg2.png";
import PracticeImg3 from "../../assets/practiceImg3.png";
import PracticeImg4 from "../../assets/practiceImg4.png";
import PracticeImg5 from "../../assets/practiceImg5.png";
import PracticeImg6 from "../../assets/practiceImg6.png";

const PracticeAreas = () => {
  return (
    <section className="practiceAreas common-padding" id="practiceAreas">
      <h2 className="common-h2">Area of Practices</h2>
      <section className="imgContainer">
        <div className="row">
          <div className="BoxImg">
            <img src={PracticeImg1} alt="PracticeImg1"  />
            <p>BUSINESS LAW</p>
          </div>
          <div className="BoxImg">
            <img src={PracticeImg2} alt="PracticeImg2" />
            <p>Partnership LAW</p>
          </div>
        </div>
        <div className="row">
          <div className="BoxImg">
            <img src={PracticeImg3} alt="PracticeImg3" />
            <p>REAL ESTATE</p>
          </div>
          <div className="BoxImg">
            <img src={PracticeImg4} alt="PracticeImg4"  />
            <p>BUSINESS LAW</p>
          </div>
        </div>
        <div className="row">
          <div className="BoxImg">
            <img src={PracticeImg5} alt="PracticeImg5"  />
            <p>LANDLORD DISPUTES</p>
          </div>
          <div className="BoxImg">
            <img src={PracticeImg6} alt="PracticeImg6" />
            <p>ELDER ABUSE</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PracticeAreas;
