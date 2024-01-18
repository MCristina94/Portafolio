import React from 'react'
import fotoMia from '../img/FotoMia.jpg'
import fotoDeMi from '../img/FotoDeMi.jpeg'
const Conoceme = () => {
  return (
    <div className="flex">
      <div className=" mr-40 mb-10 mt-20 p-8"style={{boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'}} >
        <div className="" >
          <h2 className="text-blue-600 font-bold my-8 text-lg ">Proyectos Futuros e Intereses</h2>
          <p className="text-white text-opacity-50">
          Apasionada por el desarrollo frontend e innovación. Destacada Women Developer, 
          siempre al tanto de tendencias. Busco colaborar, enfrentar desafíos para crecer 
          en frontend y backend. Mi objetivo: aprender de líderes, participar en comunidades 
          y desarrollar proyectos innovadores. Comprometida con el aprendizaje continuo y la mentoría.
          </p>
        </div>  

        <div>
          <h2 className="text-blue-600 font-bold my-8 text-lg ">Hobbies en Tecnología</h2>
          <p className="text-white text-opacity-50">
          En mi tiempo libre, aprendo de creadores en tecnología, especialmente en frontend y 
          JavaScript, a través de videos. Realizo cursos online para enriquecer mis habilidades 
          y sigo influencers en Instagram para mantenerme actualizada.
          </p>
        </div>

        <div>
          <h2 className="text-blue-600 font-bold my-8 text-lg ">Hobbies Personales</h2>
          <p className="text-white text-opacity-50">
          Disfruto compartir momentos con mi familia y la emoción de elegir películas 
          en el cine a último minuto. Valorando noches de películas en casa con comida rápida. 
          En mi tiempo libre, encuentro serenidad en la naturaleza, especialmente observando el
          mar. Disfruto bailar, jugar juegos de mesa y compartir mi tiempo con seres queridos.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className=" w-full object-cover" src={fotoDeMi} alt="foto_pinera" />
      </div>
    </div>
  )
}

export default Conoceme