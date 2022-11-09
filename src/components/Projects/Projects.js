import React from "react";
import ProjectsList from "./ProjectsList";
import tributePageImage from "../../images/tribute-page.png";
import surveyFormPageImage from "../../images/survey-form.png";
import medreactPageImage from "../../images/medreact.png";
import boatBookingPageImage from "../../images/boat-booking.png";
import hangmanPageImage from "../../images/hangman.png";
import escapeTheVirusPageImage from "../../images/escape-the-virus.png";
import classes from "./Projects.module.css";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 0,
      title: "Tribute Page",
      description: "Page dedicated to the memory of Steve Jobs",
      image: tributePageImage,
    },
    {
      id: 1,
      title: "Medreact",
      description:
        "Page of ficitive company that specialises in selling medicine - Shopping Cart",
      image: medreactPageImage,
    },
    {
      id: 2,
      title: "Survey Form",
      description: "Beautiful design of form",
      image: surveyFormPageImage,
    },
    {
      id: 3,
      title: "Escape The Virus",
      description: "Game made in plain JS where you have to escape the virus",
      image: escapeTheVirusPageImage,
    },
    {
      id: 4,
      title: "Hangman",
      description: "You have to guess a hidden word",
      image: hangmanPageImage,
    },
    {
      id: 5,
      title: "Boat Booking",
      description: "App that enables us to book some boats in a simple way",
      image: boatBookingPageImage,
    },
  ];

  return (
    <section className={classes.section} ref={ref}>
      <div className={classes.sectionTitle}>Projects</div>
      <ProjectsList projectsList={projects} />
    </section>
  );
});

export default Projects;
