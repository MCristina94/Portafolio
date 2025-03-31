import React, { useContext } from "react";
import js from "../img/js.png";
import java from "../img/java.png";
import react from "../img/react.png";
import html from "../img/html-5.png";
import css from "../img/css-3.png";
import tailwind from "../img/Tailwind_CSS_Logo.svg.png";
import vsc from "../img/vsc.png";
import intellij from "../img/intelliji.png";
import mysql from "../img/mysql.webp";
import springboot from "../img/SpringBoot.png";
import git from "../img/Git.png";
import gitHub from "../img/gitHub.png";
import materialUI from "../img/material-ui-icon.png";
import reactHookForm from "../img/react-hook-form-logo-only.png";

import { LanguageContext } from "../Context/LanguageProvider";

const Habilidades = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-20 xl:mx-10">
      <div className="flex flex-col sm:flex-row my-4 sm:my-10">
        <div className="w-full sm:w-40 mr-4 sm:mr-28 mt-5">
          <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold  text-center sm:text-left">
            {language === "english" ? "Web Layout" : "Maquetación Web"}
          </h3>
        </div>
        <div className="flex lg:flex-row mt-5 items-center justify-center lg:justify-between">
          <div className="relative">
            <img
              src={html}
              alt="html"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-lg font-semibold">HTML</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={css}
              alt="css"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-lg font-semibold">CSS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row my-4 sm:my-10">
        <div className="w-full sm:w-40 mr-4 sm:mr-28 mt-5">
          <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold  text-center sm:text-left">
            {language === "english"
              ? "Libraries and Frameworks"
              : "Librerias y Frameworks"}
          </h3>
        </div>
        <div className="flex lg:flex-row mt-5 items-center justify-center lg:justify-between">
          <div className="relative">
            <img
              src={react}
              alt="react"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-lg font-semibold">React</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={reactHookForm}
              alt="React hook form"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10 m-32"
            >
              <span className="text-white text-xs font-semibold text-center ">
                React Hook Form
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={springboot}
              alt="springboot"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-s font-semibold text-center ">
                Spring Boot
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row my-4 sm:my-10">
        <div className="w-full sm:w-40 mr-4 sm:mr-28 mt-5">
          <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold  text-center sm:text-left">
            {language === "english"
              ? "UI Frameworks & Styling"
              : "Frameworks y Estilos para UI"}
          </h3>
        </div>
        <div className="flex lg:flex-row mt-5 items-center justify-center lg:justify-between">
          <div className="relative">
            <img
              src={materialUI}
              alt="Material UI"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-xs font-semibold text-center ">
                Material UI
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={tailwind}
              alt="tailwind"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-xs font-semibold">Tailwind</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row my-4 sm:my-10">
        <div className="w-full sm:w-40 mr-4 sm:mr-28 mt-5">
          <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold text-center sm:text-left">
            {language === "english"
              ? "Programming Language"
              : "Lenguajes de Programación"}
          </h3>
        </div>
        <div className="flex mt-5 lg:flex-row items-center justify-center lg:justify-between">
          <div className="relative">
            <img
              src={js}
              alt="JavaScript"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-xs font-semibold text-center">
                Java Script
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={java}
              alt="java"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-lg font-semibold">Java</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row my-4 sm:my-10">
        <div className="w-full sm:w-40 mr-4 sm:mr-28 mt-5">
          <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold text-center sm:text-left">
            {language === "english"
              ? "Development Environments"
              : "Entornos de Desarrollo"}
          </h3>
        </div>
        <div className="flex mt-5 lg:flex-row items-center justify-center lg:justify-between">
          <div className="relative">
            <img
              src={vsc}
              alt="vsc"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-xs font-semibold text-center ">
                visual studio code
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={intellij}
              alt="intellij"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-xs font-semibold text-center ">
                Intellij Idea
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row my-4 sm:my-10">
        <div className="w-full sm:w-40 mr-4 sm:mr-28 mt-5">
          <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold text-center sm:text-left">
            {language === "english"
              ? "Version Control"
              : "Control de Versiones"}
          </h3>
        </div>
        <div className="flex mt-5 lg:flex-row items-center justify-center lg:justify-between">
          <div className="relative">
            <img
              src={git}
              alt="git"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-lg font-semibold text-center ">
                Git
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src={gitHub}
              alt="github"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-sm font-semibold text-center ">
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row my-4 sm:my-10">
        <div className="w-full sm:w-40 mr-4 sm:mr-28 mt-5">
          <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold text-center sm:text-left">
            {language === "english" ? "Data Base" : "Bases de Datos"}
          </h3>
        </div>
        <div className="flex mt-5 lg:flex-row items-center justify-center lg:justify-between">
          <div className="relative">
            <img
              src={mysql}
              alt="msql"
              className="h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            />
            <div
              className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
                h-3.2 w-3.2 xl:mr-28 lg:mr-10 sm:mr-10"
            >
              <span className="text-white text-s font-semibold text-center ">
                MySql
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
