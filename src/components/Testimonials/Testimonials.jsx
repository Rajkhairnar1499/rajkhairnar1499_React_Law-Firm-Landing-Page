import React from 'react';
import "./Testimonials.css";
import "../../App.css";
import person0 from "../../assets/person0.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import person6 from "../../assets/person6.png";
import person7 from "../../assets/person7.png";
import person8 from "../../assets/person8.png";
import Carousel from '../Carousel/Carousel';


const Testimonials = () => {

  const cardsArray = [
    {
      name: "Jarvis Cooper",
      icon: person0
    },
    {
      name: "Devon Lane",
      icon: person1
    },
    {
      name: "Robert Fox",
      icon: person2
    },
    {
      name: "John Doe",
      icon: person3
    },
    {
      name: "Robert Pattinson",
      icon: person4
    },
    {
      name: "Barney Stinson",
      icon: person5
    },
    {
      name: "Julia Vergara",
      icon: person6
    },
    {
      name: "Charlie Harper",
      icon: person7
    },
    {
      name: "Michael Scott",
      icon: person8
    }
  ]
  return (
    <section className="testimonials common-padding">
      <section className="testimonialsHead">
        <h2 className="common-h2">
          <span>What says our</span>
          <span>happy Clients</span>
        </h2>
        
        <div className="testimonialsButtons-wrapper"></div>
      </section>
      <Carousel cardsArray={cardsArray} />
    </section>
  );
  
}

export default Testimonials;
