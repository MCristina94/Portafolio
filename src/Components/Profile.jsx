import React from 'react'
import foto from '../img/Cartoonify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Card from './Card';
import Conoceme from './Conoceme';

const Profile = () => {
  return (
    <div className=" ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16 lg:ml-32 lg:mr-32 xl:ml-40 xl:mr-40"> 
        {/* perfil */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        <div className="mt-20 ">
          <img className="rounded-full w-28 h-28" src={foto} alt="avatar" />
        </div>
        <h1 className="text-white mt-10 font-bold text-2xl">
          Maurin Cristina Arturo Morales
        </h1>
        <h2 className="text-blue-600 mt-1 font-bold text-xl">
          Desarrolladora Front-End</h2>
        <div className="flex ">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#e1dfdf" }} className = "mr-5 mt-2 w-6 h-6"/>
          <FontAwesomeIcon icon={faGithub} style={{ color: "#e1dfdf" }} className = "mr-5 mt-2 w-6 h-6"/>
          <button className = "mr-5 mt-2 bg-red-500 text-white rounded-sm p-1 w-40">Descarga CV</button>
        </div>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* sobre mi */}
        <h1 className="text-white mt-96 text-2xl font-bold">Sobre mí</h1>
        <hr className="" />
        <p className="text-white text-opacity-50  mt-2">
          Soy Ingeniera Industrial; sin embargo, en la búsqueda de una nueva aventura, decidí 
          sumergirme en un bootcamp de programación Full Stack. Durante este proceso, desarrollé 
          un gusto particular por el área Front-End, aunque también adquirí conocimientos básicos 
          de Back-End con Spring Boot y MySQL. Lo que realmente me apasiona es trabajar con JavaScript 
          y React.
        </p>
        <p className="text-white text-opacity-50  mt-2">
          Disfruto aprendiendo a crear interfaces de usuario intuitivas y participando en el desarrollo 
          de aplicaciones.</p>
        <p className="text-white text-opacity-50 mt-2">
          Creo firmemente en la idea de que cada día ofrece la oportunidad de aprender algo nuevo. 
          Mi enfoque como ingeniera se basa en la filosofía de considerar cada problema como una 
          oportunidad de aprendizaje. Asumir desafíos es esencial para el crecimiento, y no tengo miedo 
          de aprovechar cualquier oportunidad que se presente.
        </p>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* Proyectos */}
        <h1 className="text-white mt-32 text-2xl font-bold">Proyectos</h1>
        <hr className="" />
        <div>
          <Card/>
        </div>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* Conoceme mas */}
        <h1 className="text-white mt-32 text-2xl font-bold">Conóceme</h1>
        <hr className="" />
        <div>
          <Conoceme/>
        </div>

      </div>
    </div>
  )
}

export default Profile