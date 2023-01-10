/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import aboutme from "../asset/image/me1.png";

const About = () => {
  return (
    <section className="about_me" id="about" name="about">
      <div className="about_me_body">
        <div>
          <h2 className="about_title">Who I am</h2>
        </div>

        <div className="about_sub">
          <p>FrontEnd & BackEnd Developer</p>
        </div>

        <div className="about_description">
          <p>
            Hello! My name is Ngamlenmang Touthang I enjoy learning and creating
            new things. My interest and curiosity in becoming a full-stack
            developer started in 2019 while I was pursuing my bachelor's degree
            in computer science and engineering.
          </p>
          <p>
            Fast-forward to today, and I have the privilege to be apart of
            Ineuron (an e-learning platform, a huge corporation and a home for
            coders) as an intern/trainee. My main focus these days is building a
            responsive fully functional and highly scalable web app.
          </p>
        </div>
      </div>
      <img src={aboutme} alt="Hero image" />
    </section>
  );
};

export default About;
