import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "Hi there! 👋 I'm a passionate Web Developer and a 3rd-year Information Technology student at Rajiv Gandhi Institute of Petroleum Technology (RGIPT).";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Frontend Development: Expertise in React, Vite, HTML, CSS, JavaScript, and creating responsive web applications.",
  "Data Visualization: Skilled in creating interactive dashboards using Power BI.",
  "UI/UX Design: Creating visually appealing, user-centric designs with a focus on accessibility and inclusivity.",
  "Version Control: Proficient in Git and GitHub for project management and collaboration.",
  
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
