import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs,faReact, faGithub} from '@fortawesome/free-brands-svg-icons';
import logoVite from '../img/vite.svg'
import tailwindLogo from '../img/Tailwind_CSS_Logo.svg.png'
import proyectoFront from '../img/ProyectoFront.png'
import proyectoGastos from '../img/PlanificadorGastos.png'
import proyectoPediatria from '../img/Pediatria.png'
import proyectoBackend from '../img/proyectoBakend.png'


const Card = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-10">
      {/* Card 1 */}
      
        <div className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 rounded-md" style={{backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                
            <div className="2xl:w-1/2 2xl:ml-20 mr-8">
                <a href="https://finalproject-frontend3-maureen.vercel.app/" target='_blank'>
                    <img className="h-28  sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 2xl:w-64 rounded-md" src={proyectoFront} alt="img proyecto final front" />
                </a>
            </div>
                
            <div className="2xl:w-1/2 2xl:mr-20">
                <a href="https://github.com/MCristina94/ctd-fe3-final" target="_blank">
                    <div className="flex justify-center items-center">
                        <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">Dental Clinic</h3>
                        <FontAwesomeIcon icon={faGithub} style={{ color: " #2563EB" }} className = "mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"/>
                    </div>
                </a>
                <p className=" text-sm my-2 text-cod-gray-900">
                    Proyecto Frontend con React y Vite. Creé una web de odontólogos con tarjetas para explorar,
                    agregar a favoritos y obtener detalles. Incluye sección de contacto con formulario para 
                    comunicación rápida. Interfaz dinámica para experiencia eficiente y atractiva. </p>
                    {/* iconos */}
                <div className="flex justify-around mt-5">
                        <FontAwesomeIcon className="h-9 w-9 mr-2" icon={faJs} style={{color: "#3182ce"}} />
                        <FontAwesomeIcon className="h-9 w-9 mr-2" icon={faReact} style={{color: "#3182ce"}} />
                        <img className="h-9 w-9" src={logoVite} alt="logo vite" />
                </div>
            </div>
        </div>
       

      {/* Card 2 */}
      
        <div className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 rounded-md" style={{backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <div className="2xl:w-1/2 2xl:ml-20 mr-8">
                <a href="https://project-adm-pacientes.vercel.app/" target='_blank'>
                    <img className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md" src={proyectoPediatria} alt="img proyecto final front" />
                </a>
            </div>
                    
            <div className="2xl:w-1/2 2xl:mr-20">
                <a href="https://github.com/MCristina94/Project-AdmPacientes" target="_blank">
                    <div className="flex justify-center items-center">
                        <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">Registro de Pacientes</h3>
                        <FontAwesomeIcon icon={faGithub} style={{ color: " #2563EB" }} className = "mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"/>
                    </div>
                </a>
                
                <p className="text-sm my-2 text-cod-gray-900">
                        Proyecto React: Registro y Gestión de Pacientes
                        Creado en un curso de Udemy, este proyecto simplifica el registro, visualización y modificación de 
                        información de pacientes. Interfaz intuitiva para una experiencia eficiente. ¡Administre datos de 
                        pacientes de manera fácil y rápida!  </p>
                        {/* iconos */}
                <div className="flex justify-around mt-5">
                    <FontAwesomeIcon className="h-9 w-9 mr-2" icon={faJs} style={{color: "#3182ce"}} />
                    <FontAwesomeIcon className="h-9 w-9 mr-2" icon={faReact} style={{color: "#3182ce"}} />
                    <img className="h-9 w-9" src={logoVite} alt="logo vite" />
                    <img className="h-9 w-9" src={tailwindLogo} alt="logo tailwind" />
                </div>
            </div>
        </div>
   


       {/* Card 3 */}
      
        <div className="flex flex-col items-center 2xl:flex-row justify-center my-10 mx-10 p-10 rounded-md" style={{backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className="2xl:w-1/2 2xl:ml-20 mr-8">
                <a href="https://project-presupuestos.vercel.app/" target='_blank'>
                    <img className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md" src={proyectoGastos} alt="img proyecto final front" />
                </a>
                </div>

                <div className="2xl:w-1/2 2xl:mr-20">
                    <a href="https://github.com/MCristina94/Project-Presupuestos" target="_blank">
                        <div className="flex justify-center items-center">
                            <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl hover:text-cod-gray-purpura-conoceme">Planificador de Gastos</h3>
                            <FontAwesomeIcon icon={faGithub} style={{ color: " #2563EB" }} className = "mt-2 w-6 h-6  hover:text-cod-gray-purpura-conoceme"/>
                        </div>
                    </a>

                    <p className="text-sm my-2 text-cod-gray-900">
                    Proyecto de Planificación de Gastos en React, creado con el curso de Udemy. Permite presupuestar, 
                    registrar gastos en categorías como salud, alimentación, estudio, ocio, y ver el saldo restante. 
                    Incluye una gráfica dinámica para gestión financiera efectiva. ¡Administra tus gastos fácilmente! </p>
                    {/* iconos */}
                    <div className="flex justify-around mt-5">
                        <FontAwesomeIcon className="h-9 w-9 mr-2" icon={faJs} style={{color: "#3182ce"}} />
                        <FontAwesomeIcon className="h-9 w-9 mr-2" icon={faReact} style={{color: "#3182ce"}} />
                        <img className="h-9 w-9" src={logoVite} alt="logo vite" />
                    </div>
                </div>
            </div>
        

    </div>
  )
}

export default Card