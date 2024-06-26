import React from 'react';
import "./Team.css";
import "../../App.css";
// import person0 from "../../assets/person0.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import person6 from "../../assets/person6.png";
// import person7 from "../../assets/person7.png";
// import person8 from "../../assets/person8.png";

const Team = () => {
  const cardArray = [
    {
      name: "Danial Def", cases: 301, icon: person1
    },
    {
      name: "Sanfole", cases: 850, icon: person2
    },
    {
      name: "Cesforila", cases: 470, icon: person3
    },
    {
      name: "Colleen", cases: 180, icon: person4
    },
    {
      name: "Haldone", cases: 212, icon: person5
    },
    {
      name: "Nik Jeo", cases: 350, icon: person6
    }
  ];

  const displayCards = () => {
    return cardArray.map((person, idx) => {
      return (
        <div className='teamCard'>
          <span className='teamCardImg-wrapper'>
            <img src={person?.icon} alt={person?.icon}/>
          </span>
          <span className='teamTexts'>
            <span className='teamPersonName'>
              {person?.name}
            </span>
            <span className='cases'>
              {person?.cases} cases
            </span>
          </span>
        </div>
      )
    })
  }

  return (
    <section className='common-padding team' id='attorneys'>
      <h2 className='common-h2'>Our Team</h2>
      <section className='teamList'>
        {displayCards()}
      </section>
    </section>
  )
}

export default Team;