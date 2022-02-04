import React from "react";
import FooterSocialLinks from "./FooterSocialLinks";
import { AiFillHeart } from "react-icons/ai";
import "./style.css";

const Footer = (props) => {
  return (
    <section id="footer" className="Footer-Main_Wrapper">
      <div className="Footer-Secondary-Wrapper">
        <div className="Footer-Main-Text">
          Let&apos;s build something great together :)
        </div>
        <div>
          <FooterSocialLinks />
        </div>
      </div>
      <div className="Footer-Bottom-Text">
        © {new Date().getFullYear()}, Made with &nbsp;<AiFillHeart className="Heart"  color="#9CA3AF" />&nbsp;
        by Devstardude
      </div>
    </section>
  );
};

export default Footer;
