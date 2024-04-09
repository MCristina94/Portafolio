import React, { useContext } from "react";
import logoFooter from "../img/iconoFooter.png";
import "../Styles/footer.module.css";
import { LanguageContext } from "../Context/LanguageProvider";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div
      className="flex flex-col items-center justify-center bgFooter"
      style={{ height: "20vh" }}
    >
      <img
        className=""
        style={{ height: "8vh" }}
        src={logoFooter}
        alt="logo footer"
      />
      <div>
        <p className="text-cod-gray-purpura-conoceme">
          {language === "english" ? "Thank you for visiting my website!" : "¡Gracias por visitar mi sitio web!"}
        </p>
      </div>
      <div>
        <a href="https://github.com/MCristina94/" target="_blank">
          <i
            class="fa-brands fa-github"
            style={{ color: "#8f8ad4", width: "30px" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/maureen-cris" target="_blank">
          <i
            class="fa-brands fa-linkedin"
            style={{ color: "#8f8ad4", width: "30px" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
