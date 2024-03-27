import React from "react";
import "./FAQ.css";
import "../../App.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ReactComponent as Expand } from "../../assets/Expand.svg";

const FAQ = () => {
  const displayAccordian = (summary) => {
    const details =
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduisenim velit mollit Exer. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.";
    return (
      <Accordion className="faq-accordian">
        <AccordionSummary
          expandIcon={<Expand />}
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panella-header"
          className="faq-accordian-summary"
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails className="faq-accordian-details">
          {details}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <section className="faq common-padding">
      <h2 className="common-h2">FAQ</h2>
      <div className="faq-body">
        <p className="faq-para">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className="faq-accordian-container">
          {displayAccordian("Do I need a personal injury report?")}
          {displayAccordian("How much is my case worth?")}
          {displayAccordian("What should I do right after car accident")}
          {displayAccordian("How much is my case worth?")}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
