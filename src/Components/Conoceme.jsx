import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageProvider";
import text from '../text/text.json'

const Conoceme = () => {
  const {language} = useContext(LanguageContext);
  const hobbiesText = language === "english" ? text[2].hobbies.english : text[2].hobbies.spanish;
  return (
    <div className="flex items-center mt-10 p-8 rounded-md">
      <div
        className="mb-10 mt-10 p-8 rounded-md lg:mr-4 sm:items-center"
        style={{
          backgroundColor: "#f6f6f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div>
          <h2 className=" text-cod-gray-purpura-conoceme font-bold mb-8 text-2xl">
            {language === "english" ? "Goals" : "Proyectos Futuros e Intereses"}
          </h2>
          <p className="text-cod-gray-900">
            {hobbiesText.goals}
          </p>
        </div>

        <div>
          <h2 className="text-cod-gray-purpura-conoceme  font-bold my-8 text-2xl ">
          {language === "english" ? "Tech Hobbies" : "Hobbies en Tecnología"}
          </h2>
          <p className="text-cod-gray-900">
            {hobbiesText.techH}
          </p>
        </div>

        <div>
          <h2 className="text-cod-gray-purpura-conoceme  font-bold my-8 text-2xl ">
          {language === "english" ? "Personal Hobbies" : "Hobbies Personales"}
          </h2>
          <p className="text-cod-gray-900">
            {hobbiesText.personalH}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conoceme;
