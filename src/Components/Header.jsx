import React from 'react'
import fotoPerfil from '../img/FotoPerfil.png'
import iconoM from '../img/iconoM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-4 bg-header-color" style={{minHeight: '40vh'}}>
      <div className="flex flex-col items-center lg:mb-0 lg:mr-10">
        <img className="mb-2" style={{height: '25vh'}} src={fotoPerfil} alt="foto de perfil" />
        <div className="flex justify-center items-center text-center rounded-3xl mt-0 mb-10 p-2" style={{background: 'linear-gradient(to right, #996dff, #591ffa)',  minHeight: '5vh', minWidth: '10vw'}}>
          <img className = "mr-2 md:mr-4 mt-2 w-4 h-4" src={iconoM} alt="logo M" />
          <a href="https://www.linkedin.com/in/maurin-cristina-a-8b349615b/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#e7e7e7" }} className = "mr-2 md:mr-4 mt-2 w-4 h-4"/></a>
          <a href="https://github.com/MCristina94" target="_blank"><FontAwesomeIcon icon={faGithub} style={{ color: "#e7e7e7" }} className = "mt-2 w-4 h-4"/></a>
        </div>
      </div>
      

      <div className="ml-10">
        <p className="text-white"> 1 <span className="text-yellow-300">&#123;</span></p>
        <p className="text-white"> 2 &nbsp; &nbsp; <span className=" text-cod-gray-header-color-Menta">"name" <span className="text-yellow-300">:</span></span><span className="text-cod-gray-header-color-Orange"> "Maureen"</span> , </p>
        <p className="text-white"> 3 &nbsp; &nbsp; <span className=" text-cod-gray-header-color-Menta">"goals" <span className="text-yellow-300">:</span></span>  <span className="text-cod-gray-header-color-Orange"> "Front-End Developer"</span> , </p>
        <p className="text-white"> 4 &nbsp; &nbsp; <span className=" text-cod-gray-header-color-Menta">"likes" <span className="text-yellow-300">:</span></span ><span className="text-violet-700"> &#91;</span> <span className="text-cod-gray-header-color-Orange">"Harry Potter", "Star Wars"</span><span className="text-violet-700">&#93;</span> , </p>
        <p className="text-white"> 5 <span className="text-yellow-300">&#125;</span></p>
      </div>
    </div>
  )
}

export default Header