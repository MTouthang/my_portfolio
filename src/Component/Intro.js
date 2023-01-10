/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import profile from "../asset/image/image1.jpg";

const Intro = () => {
  return (
    <section className="intro" id="home" name="home">
      <img
        className="intro_img"
        src={profile}
        alt="a picture of Ngamlenmang Touthang"
      />

      <h1 className="section_title intro_title">
        Hi, I am <br />
        <strong> Ngamlenmang Touthang</strong>
      </h1>
      <div className="intro_description">
        <p className="section_sub_title intro_subtitle">Full Stack Developer</p>
      </div>
    </section>
  );
};

export default Intro;
