import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import logoVite from "../img/vite.svg";
import tailwindLogo from "../img/Tailwind_CSS_Logo.svg.png";
import javaLogo from "../img/java.png";
import awsLogo from "../img/aws.png";
import mysqlLogo from "../img/mysql.webp";
import proyectoGastos from "../img/PlanificadorGastos.png";
import proyectoPediatria from "../img/Pediatria.png";
import proyectoBackend from "../img/proyectoBakend.png";
import coachConnect from "../img/CoachConnect.png";
import travelBlog from "../img/Travelsblog.png";
import mavenLogo from "../img/maven.png";
import materialui from "../img/material-ui-icon.png";
import rickMorty from "../img/RickMorty.png";
import springBootLogo from "../img/SpringBoot.png";
import spotifyclone from "../img/spotifyclone.png";
import { LanguageContext } from "../Context/LanguageProvider";
import text from "../text/text.json";

const Card = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const projectText =
    language === "english"
      ? text[1].projectsCards.english
      : text[1].projectsCards.spanish;
  return (
    <div className="flex flex-col items-center justify-between mt-10">
      {/* Card 1 */}
      <div
        className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 hover:border-l-8  border-l-cod-gray-purpura-border hover:transform hover:scale-95"
        style={{
          backgroundColor: "#f6f6f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "0 15px 15px 0",
        }}
      >
        <div className="2xl:w-1/2 2xl:ml-20 mr-8 relative">
          <a
            href="https://spotify-clone-self-gamma-39.vercel.app/"
            target="_blank"
            className="block"
          >
            <div className="relative">
              <img
                className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md object-cover"
                src={spotifyclone}
                alt="TravelBlog"
              />
              {/* Pseudo-elemento para crear el overlay gris translúcido */}
              <div
                className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
              h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md"
              >
                <span className="text-white text-lg font-semibold">
                  Ver pag.
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="2xl:w-1/2 2xl:mr-20">
          <a
            href="https://github.com/MCristina94/Spotify-Clone"
            target="_blank"
          >
            <div className="flex justify-center items-center">
              <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">
                {language === "english" ? "Spotify Clone" : "Spotify Clone"}
              </h3>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: " #2563EB" }}
                className="mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"
              />
            </div>
          </a>

          <p className=" text-sm my-2 text-cod-gray-900">
            {projectText.spotify}
          </p>

          {/* iconos */}
          <div className="flex justify-around mt-5">
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faJs}
              style={{ color: "#3182ce" }}
            />
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faReact}
              style={{ color: "#3182ce" }}
            />
            <img className="h-9 w-9" src={logoVite} alt="logo vite" />
            <img className="h-9 w-9" src={tailwindLogo} alt="logo tailwind" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 hover:border-l-8  border-l-cod-gray-purpura-border hover:transform hover:scale-95"
        style={{
          backgroundColor: "#f6f6f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "0 15px 15px 0",
        }}
      >
        <div className="2xl:w-1/2 2xl:ml-20 mr-8 relative">
          <a
            href="https://travel-blog-sandy-seven.vercel.app/"
            target="_blank"
            className="block"
          >
            <div className="relative">
              <img
                className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md object-cover"
                src={travelBlog}
                alt="TravelBlog"
              />
              {/* Pseudo-elemento para crear el overlay gris translúcido */}
              <div
                className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
              h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md"
              >
                <span className="text-white text-lg font-semibold">
                  Ver pag.
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="2xl:w-1/2 2xl:mr-20">
          <a href="https://github.com/MCristina94/TravelBlog" target="_blank">
            <div className="flex justify-center items-center">
              <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">
                {language === "english" ? "Travel's Blog" : "Blog de Viajes"}
              </h3>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: " #2563EB" }}
                className="mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"
              />
            </div>
          </a>

          <p className=" text-sm my-2 text-cod-gray-900">
            {projectText.travelBlog}
          </p>

          {/* iconos */}
          <div className="flex justify-around mt-5">
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faJs}
              style={{ color: "#3182ce" }}
            />
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faReact}
              style={{ color: "#3182ce" }}
            />
            <img className="h-9 w-9" src={logoVite} alt="logo vite" />
            <img className="h-9 w-9" src={materialui} alt="material ui" />
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div
        className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 hover:border-l-8  border-l-cod-gray-purpura-border hover:transform hover:scale-95"
        style={{
          backgroundColor: "#f6f6f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "0 15px 15px 0",
        }}
      >
        <div className="2xl:w-1/2 2xl:ml-20 mr-8 relative">
          <a
            href="https://www.coachconnect.tech"
            target="_blank"
            className="block"
          >
            <div className="relative">
              <img
                className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md object-cover"
                src={coachConnect}
                alt="coachConnect"
              />
              {/* Pseudo-elemento para crear el overlay gris translúcido */}
              <div
                className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
              h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md"
              >
                <span className="text-white text-lg font-semibold">
                  Ver pag.
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="2xl:w-1/2 2xl:mr-20">
          <div className="flex justify-center items-center">
            <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl">
              {language === "english" ? "CoachConnect" : "CoachConnect"}
            </h3>
          </div>

          <div className="flex justify-center items-center">
            <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-m">
              <a
                href="https://github.com/MCristina94/CoachConnect-FE"
                target="_blank"
              >
                <span className=" hover:text-cod-gray-purpura-conoceme">
                  Frontend
                </span>{" "}
                -{" "}
              </a>
              <a
                href="https://github.com/MCristina94/CoachConnect-BE"
                target="_blank"
              >
                {" "}
                <span className=" hover:text-cod-gray-purpura-conoceme">
                  Backend
                </span>
              </a>
            </h3>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: " #2563EB" }}
              className="mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"
            />
          </div>

          <p className=" text-sm my-2 text-cod-gray-900">
            {projectText.coachconnect}
          </p>

          {/* iconos */}
          <div className="flex justify-around mt-5">
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faJs}
              style={{ color: "#3182ce" }}
            />
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faReact}
              style={{ color: "#3182ce" }}
            />
            <img className="h-9 w-9" src={logoVite} alt="logo vite" />
            <img className="h-9 w-9" src={javaLogo} alt="logo java" />
            <img className="h-9 w-9" src={mysqlLogo} alt="logo Mysql" />
            <img className="h-9 w-9" src={awsLogo} alt="logo aws" />
          </div>
        </div>
      </div>

      {/* Card 4 */}

      <div
        className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 hover:border-l-8  border-l-cod-gray-purpura-border hover:transform hover:scale-95"
        style={{
          backgroundColor: "#f6f6f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "0 15px 15px 0",
        }}
      >
        <div className="2xl:w-1/2 2xl:ml-20 mr-8 relative">
          <a
            href="https://github.com/MCristina94/ProyectoFinalBackend"
            target="_blank"
            className="block"
          >
            <div className="relative">
              <img
                className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md "
                src={proyectoBackend}
                alt="proyectoBackend"
              />

              <div
                className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
              h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md"
              >
                <span className="text-white text-lg font-semibold">
                  Ver Repositorio.
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="2xl:w-1/2 2xl:mr-20">
          <a
            href="https://github.com/MCristina94/ProyectoFinalBackend"
            target="_blank"
          >
            <div className="flex justify-center items-center">
              <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">
                {language === "english"
                  ? "Dental Reserve - Backend"
                  : "Reserva Odontologica - Backend"}
              </h3>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: " #2563EB" }}
                className="mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"
              />
            </div>
          </a>
          <p className=" text-sm my-2 text-cod-gray-900">
            {projectText.dentalBE}
          </p>
          {/* iconos */}
          <div className="flex justify-around mt-5">
            <img className="h-9 w-9" src={javaLogo} alt="logo java" />
            <img
              className="h-9 w-9"
              src={springBootLogo}
              alt="logo SpringBoot"
            />
            <img className="h-9 w-9" src={mavenLogo} alt="logo maven" />
          </div>
        </div>
      </div>

      {/* Card 5 */}

      <div
        className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 hover:border-l-8  border-l-cod-gray-purpura-border hover:transform hover:scale-95"
        style={{
          backgroundColor: "#f6f6f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "0 15px 15px 0",
        }}
      >
        <div className="2xl:w-1/2 2xl:ml-20 mr-8 relative">
          <a
            href="https://project-adm-pacientes.vercel.app/"
            target="_blank"
            className="block"
          >
            <div className="relative">
              <img
                className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md "
                src={proyectoPediatria}
                alt="proyectoPediatria"
              />

              <div
                className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
              h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md"
              >
                <span className="text-white text-lg font-semibold">
                  Ver pag.
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="2xl:w-1/2 2xl:mr-20">
          <a
            href="https://github.com/MCristina94/Project-AdmPacientes"
            target="_blank"
          >
            <div className="flex justify-center items-center">
              <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">
                {language === "english"
                  ? "Patient Registration"
                  : "Registro Pacientes"}
              </h3>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: " #2563EB" }}
                className="mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"
              />
            </div>
          </a>

          <p className="text-sm my-2 text-cod-gray-900">
            {projectText.pacientRegis}
          </p>
          {/* iconos */}
          <div className="flex justify-around mt-5">
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faJs}
              style={{ color: "#3182ce" }}
            />
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faReact}
              style={{ color: "#3182ce" }}
            />
            <img className="h-9 w-9" src={logoVite} alt="logo vite" />
            <img className="h-9 w-9" src={tailwindLogo} alt="logo tailwind" />
          </div>
        </div>
      </div>

      {/* Card 6 */}

      <div
        className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 hover:border-l-8  border-l-cod-gray-purpura-border hover:transform hover:scale-95"
        style={{
          backgroundColor: "#f6f6f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "0 15px 15px 0",
        }}
      >
        <div className="2xl:w-1/2 2xl:ml-20 mr-8 relative">
          <a
            href="https://project-presupuestos.vercel.app/"
            target="_blank"
            className="block"
          >
            <div className="relative">
              <img
                className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md "
                src={proyectoGastos}
                alt="proyectoGastos"
              />

              <div
                className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
              h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md"
              >
                <span className="text-white text-lg font-semibold">
                  Ver pag.
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="2xl:w-1/2 2xl:mr-20">
          <a
            href="https://github.com/MCristina94/Project-Presupuestos"
            target="_blank"
          >
            <div className="flex justify-center items-center">
              <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">
                {language === "english"
                  ? "Expense Planner"
                  : "Planificador de Gastos"}
              </h3>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: " #2563EB" }}
                className="mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"
              />
            </div>
          </a>

          <p className="text-sm my-2 text-cod-gray-900">
            {projectText.planner}
          </p>
          {/* iconos */}
          <div className="flex justify-around mt-5">
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faJs}
              style={{ color: "#3182ce" }}
            />
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faReact}
              style={{ color: "#3182ce" }}
            />
            <img className="h-9 w-9" src={logoVite} alt="logo vite" />
          </div>
        </div>
      </div>

      {/* Card 7 */}

      <div
        className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 hover:border-l-8  border-l-cod-gray-purpura-border hover:transform hover:scale-95"
        style={{
          backgroundColor: "#f6f6f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "0 15px 15px 0",
        }}
      >
        <div className="2xl:w-1/2 2xl:ml-20 mr-8 relative">
          <a
            href="https://rickandmorty-8rsh30706-maureens-projects-42a21fd4.vercel.app/"
            target="_blank"
            className="block"
          >
            <div className="relative">
              <img
                className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md object-cover"
                src={rickMorty}
                alt="Rick and Morty"
              />

              <div
                className="absolute inset-0 bg-gray-700 opacity-0 hover:opacity-70 flex items-center justify-center 
              h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md"
              >
                <span className="text-white text-lg font-semibold">
                  Ver pag.
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="2xl:w-1/2 2xl:mr-20">
          <a
            href="https://github.com/MCristina94/Prueba-tecnica-react"
            target="_blank"
          >
            <div className="flex justify-center items-center">
              <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">
                {language === "english" ? "Rick and Morty" : "Rick and Morty"}
              </h3>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: " #2563EB" }}
                className="mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"
              />
            </div>
          </a>

          <p className="text-sm my-2 text-cod-gray-900">
            {projectText.rickmorty}
          </p>
          {/* iconos */}
          <div className="flex justify-around mt-5">
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faJs}
              style={{ color: "#3182ce" }}
            />
            <FontAwesomeIcon
              className="h-9 w-9 mr-2"
              icon={faReact}
              style={{ color: "#3182ce" }}
            />
            <img className="h-9 w-9" src={logoVite} alt="logo vite" />
            <img className="h-9 w-9" src={tailwindLogo} alt="logo tailwind" />
          </div>
        </div>
      </div>
      {/* Card 8 */}
    </div>
  );
};

export default Card;
