import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const HeaderSocials = () => {
  return (
    <div className="header__socials header__socials--top">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/adelnovalalfarizi"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="social-icon" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Biggzy-K423"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="social-icon" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/your_instagram_username"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className="social-icon" />
      </a>

      {/* Email */}
      <a
        href="mailto:adelfarizi@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <HiMail className="social-icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;