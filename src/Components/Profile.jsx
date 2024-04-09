import { useContext } from "react";
import Card from "./Card";
import Conoceme from "./Conoceme";
import Habilidades from "./Habilidades";
import { LanguageContext } from "../Context/LanguageProvider";
import text from "../text/text.json";

const Profile = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const aboutMeText =
    language === "english"
      ? text[0].aboutMeP.english
      : text[0].aboutMeP.spanish;

  return (
    <div className=" ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16 lg:ml-32 lg:mr-32 xl:ml-40 xl:mr-40">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        <h2 className="text-xl mt-32 text-cod-gray-900">
          {language === "english" ? "Portfolio" : "Portafolio"}
        </h2>
        {/* sobre mi */}
        <h1 className=" text-3xl font-bold mt-5">
          {language === "english" ? "About Me" : "Sobre mi"}
        </h1>
        <hr style={{ border: "1px solid #6d40ae" }} />

        <p className="mx-10 mt-5 text-xl text-cod-gray-900">{aboutMeText.p1}</p>

        <p className="mx-10 mt-5 text-xl text-cod-gray-900">{aboutMeText.p2}</p>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* Proyectos */}
        <h1 className="text-3xl font-bold mt-32">
          {language === "english" ? "Projects" : "Proyectos"}
        </h1>
        <hr style={{ border: "1px solid #6d40ae" }} />
        <div>
          <Card />
        </div>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* Habilidades */}
        <h1 className="text-3xl font-bold mt-32">
          {language === "english" ? "Skills" : "Habilidades"}
        </h1>
        <hr style={{ border: "1px solid #6d40ae" }} />
        <div>
          <Habilidades />
        </div>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* Conoceme mas */}
        <h1 className="mt-32 text-3xl font-bold">
          {language === "english" ? "Goals and Hobbies" : "Conoceme"}
        </h1>
        <hr style={{ border: "1px solid #6d40ae" }} />
        <div>
          <Conoceme />
        </div>
      </div>
    </div>
  );
};

export default Profile;
