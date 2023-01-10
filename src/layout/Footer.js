import React from "react";

const Footer = () => {
  return (
    <footer id="contact_me" name="contact_me">
      <h3>Connect with Me</h3>
      <button className="footer_link">
        <a href="mailto:ngtouthang96.com"> Mail </a>
      </button>
      <ul className="social_list">
        <li className="social_list_item">
          <a
            href="https://www.linkedin.com/in/ngamlenmangtouthang/"
            target="_blank"
            className="social_list_link"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>LinkedIn
          </a>
        </li>
        <li className="social_list_item">
          <a
            href="https://github.com/MTouthang"
            target="_blank"
            className="social_list_link"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>GitHub
          </a>
        </li>
        <li className="social_list_item">
          <a
            href="https://ngtouthang.hashnode.dev/"
            target="_blank"
            className="social_list_link"
            rel="noreferrer"
          >
            <i className="fa-brands fa-hashnode"></i>Blog
          </a>
        </li>
        <li className="social_list_item">
          <a
            href="https://twitter.com/ngtouthang"
            target="_blank"
            className="social_list_link"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>Twitter
          </a>
        </li>
        <li className="social_list_item">
          <a
            href="https://www.instagram.com/ngamlenmang_touthang/"
            target="_blank"
            className="social_list_link"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>Instagram
          </a>
        </li>
      </ul>
      <p>Develop with ❤ by MTouthang 2023</p>
    </footer>
  );
};

export default Footer;
