import React from "react";
import "./portfolio.css";
import PYTHON from "../../assets/python.png";
import VECTOR from "../../assets/vector.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {/* Vector */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={VECTOR} alt="" />
          </div>
          <h3>VECTOR: Personal AI Smart Robot</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
        </article>

        {/* Python employee application form   */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PYTHON} alt="" />
          </div>
          <h3>Employee Application Form Using Tkinter</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
