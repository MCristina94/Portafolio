import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs,faReact} from '@fortawesome/free-brands-svg-icons';
import logoVite from '../img/vite.svg'
import proyectoFront from '../img/ProyectoFront.png'


const Card = () => {
  return (
    <div>
        <div className="my-10 h-2/4 w-72 rounded-md shadow-white p-0" style={{boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'}}>
            <img className=" h-56 w-72 rounded-md" src={proyectoFront} alt="img proyecto final front" />
            <div className="p-5">
                <h3 className="text-blue-600 font-bold text-center mr-5 my-2 text-lg">Dental Clinic</h3>
                <p className="text-white text-opacity-50 text-xs my-2">Proyecto final de Frontend, se creo una página web utilizando React y 
                el entorno de desarrollo Vite. En el sitio, implementé tarjetas de odontólogos registrados, permitiéndome explorar,
                agregar a favoritos y obtener detalles sobre cada profesional. Además, incluí una sección de contacto con un formulario 
                para facilitar la comunicación rápida. La interfaz dinámica proporciona una experiencia eficiente y atractiva para los 
                usuarios. </p>
                {/* iconos */}
                <div className="flex justify-between">
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