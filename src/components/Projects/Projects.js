import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectsList from "./ProjectsList";
import tributePageImage from "../../images/tribute-page.png";
import surveyFormPageImage from "../../images/survey-form.png";
import medreactPageImage from "../../images/medreact.png";
import boatBookingPageImage from "../../images/boat-booking.png";
import hangmanPageImage from "../../images/hangman.png";
import escapeTheVirusPageImage from "../../images/escape-the-virus.png";
import djangstaurantImage from "../../images/djangstaurant.png"
import classes from "./Projects.module.css";

const Projects = React.forwardRef((props, ref) => {
  const { ref: coneRef, inView: isConeVisible } = useInView();
  const projects = [
    {
      id: 0,
      title: "Djangstaurant",
      description: "Restaurant-like website with clean design",
      image: djangstaurantImage,
      technologies: ["Python", "Django", "HTML", "CSS"],
    },
    {
      id: 1,
      title: "Boat Booking",
      description: "App that enables us to book some boats in a simple way",
      image: boatBookingPageImage,
      technologies: ["React", "HTML", "CSS"],
    },
    {
      id: 2,
      title: "Medreact",
      description:
        "Page of ficitive company that specialises in selling medicine - Shopping Cart",
      image: medreactPageImage,
      technologies: ["React", "HTML", "CSS"],
    },
    {
      id: 3,
      title: "Tribute Page",
      description: "Page dedicated to the memory of Steve Jobs",
      image: tributePageImage,
      technologies: ["HTML", "CSS"],
    },
    {
      id: 4,
      title: "Survey Form",
      description: "Beautiful design of form",
      image: surveyFormPageImage,
      technologies: ["HTML", "CSS"],
    },
    {
      id: 5,
      title: "Escape The Virus",
      description: "Game made in plain JS where you have to escape the virus",
      image: escapeTheVirusPageImage,
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 6,
      title: "Hangman",
      description: "You have to guess a hidden word",
      image: hangmanPageImage,
      technologies: ["JavaScript", "HTML", "SCSS"],
    },
  ];

  return (
    <section className={classes.section} ref={ref}>
      <div className={classes.sectionTitle}>
        Projects
        <div className={classes.titleAnimation} ref={coneRef}>
          <div className={`${isConeVisible && classes.line}`}></div>
          <div className={`${isConeVisible && classes.line}`}></div>
          <div className={`${isConeVisible && classes.line}`}></div>
          <div className={`${isConeVisible && classes.line}`}></div>
          <div className={`${isConeVisible && classes.line}`}></div>
          <div className={`${isConeVisible && classes.line}`}></div>
          <div className={`${isConeVisible && classes.line}`}></div>
          <div className={`${isConeVisible && classes.line}`}></div>
        </div>
      </div>
      <ProjectsList projectsList={projects} />
    </section>
  );
});

export default Projects;
