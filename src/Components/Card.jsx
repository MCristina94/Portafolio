import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs,faReact} from '@fortawesome/free-brands-svg-icons';
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
      <a href="https://finalproject-frontend3-maureen.vercel.app/" target='_blank'>
        <div className="flex flex-col items-center lg:flex-row justify-center my-10 mx-10 p-10 rounded-md" style={{backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className="lg:w-1/2 lg:ml-20 mr-8">
                    <img className="h-28  sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md" src={proyectoFront} alt="img proyecto final front" />
                </div>
            
                <div className="lg:w-1/2 lg:mr-20">
                    <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-xl">Dental Clinic</h3>
                    <p className=" text-sm my-2">
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
        </a>

      {/* Card 2 */}
      <a href="https://project-adm-pacientes.vercel.app/" target='_blank'>
        <div className="flex flex-col items-center lg:flex-row justify-center my-10 mx-10 p-10 rounded-md" style={{backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <div className="lg:w-1/2 lg:ml-20 mr-8">
                <img className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md" src={proyectoPediatria} alt="img proyecto final front" />
            </div>
                    
            <div className="lg:w-1/2 lg:mr-20">
                <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-lg">Registro de Pacientes</h3>
                <p className="text-sm my-2">
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
    </a>


       {/* Card 3 */}
       <a href="https://project-presupuestos.vercel.app/" target='_blank'>
        <div className="flex flex-col items-center lg:flex-row justify-center my-10 mx-10 p-10 rounded-md" style={{backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
                <div className="lg:w-1/2 lg:ml-20 mr-8">
                    <img className="h-28 sm:h-28 lg:h-32 xl:h-44 w-36 sm:w-40 lg:w-48 xl:w-64 rounded-md" src={proyectoGastos} alt="img proyecto final front" />
                </div>

                <div className="lg:w-1/2 lg:mr-20">
                    <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-lg">Planificador de Gastos</h3>
                    <p className="text-sm my-2">
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
        </a>

    </div>
  )
}

export default Card