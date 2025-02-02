/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Portfolio Website",
    description:
      "Created using React , vite , tailwind css , JS. You can checkout my projects through there and can contact me easily.",
    url: "https://aman2125.github.io/My_Portfolio/",
  },
  {
    title: "Todo and Journal page",
    description:
      "Created using HTML, CSS , JS , Bootstrap. You increase your productivity and efficiency by using the website.",
    url: "https://github.com/Aman2125/Todo-and-Journal",
  },
  {
    title: "Indian Recipe Finder Website",
    description:
      "Indian Recipe Finder 🍛 A modern web app built with React and Vite to discover authentic Indian recipes. Features include recipe search, category filters (vegetarian, desserts, etc.), detailed instructions, and a sleek, responsive design.",
    url: "https://aman2125.github.io/Indian_recipe_finder/",
  },
  {
    title: "Quiz and Games Website",
    description:
      "The Quiz and Games Website 🎮 is an interactive platform built with React and TypeScript. It offers various quizzes 🧠 and fun mini-games 🎲, along with real-time score tracking 🏆.",
    url: "https://aman2125.github.io/Quiz_and_Games/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
