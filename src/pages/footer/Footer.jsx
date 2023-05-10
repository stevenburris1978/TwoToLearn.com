import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaMeetup } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h1>Social Connections</h1>
      <div>
        <FaMeetup size={25} />
        <FaFacebook size={25} />
        <FaInstagram size={25} />
        <FaTwitter size={25} />
      </div>
      <div className="footer__copyright">
        <small>2023 &copy; All Rights Reserved</small>
      </div>
    </div>
  );
}