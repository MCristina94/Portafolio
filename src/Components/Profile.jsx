import Card from './Card';
import Conoceme from './Conoceme';
import Habilidades from './Habilidades';

const Profile = () => {
  return (
    <div className=" ml-4 mr-4 sm:ml-8 sm:mr-8 md:ml-16 md:mr-16 lg:ml-32 lg:mr-32 xl:ml-40 xl:mr-40"> 
      
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        <h2 className="text-xl mt-32 text-cod-gray-900">Portfolio</h2>
        {/* sobre mi */}
        <h1 className=" text-3xl font-bold mt-5">Sobre mí</h1>
        <hr style={{border: '1px solid #6d40ae'}} />
        <p className="mx-10 mt-5 text-xl text-cod-gray-900">
          Soy Ingeniera Industrial; sin embargo, en la búsqueda de una nueva aventura, decidí 
          sumergirme en un bootcamp de programación Full Stack. Durante este proceso, desarrollé 
          un gusto particular por el área Front-End, aunque también adquirí conocimientos básicos 
          de Back-End con Spring Boot y MySQL. Lo que realmente me apasiona es trabajar con JavaScript 
          y React.
        </p>
        <p className="mx-10 mt-5 text-xl text-cod-gray-900">
          Disfruto aprendiendo a crear interfaces de usuario intuitivas y participando en el desarrollo 
          de aplicaciones.</p>
        <p className="mx-10 mt-5 text-xl text-cod-gray-900">
          Creo firmemente en la idea de que cada día ofrece la oportunidad de aprender algo nuevo. 
          Mi enfoque como ingeniera se basa en la filosofía de considerar cada problema como una 
          oportunidad de aprendizaje. Asumir desafíos es esencial para el crecimiento, y no tengo miedo 
          de aprovechar cualquier oportunidad que se presente.
        </p>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* Proyectos */}
        <h1 className="text-3xl font-bold mt-32">Proyectos</h1>
        <hr style={{border: '1px solid #6d40ae'}} />
        <div>
          <Card/>
        </div>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* Habilidades */}
        <h1 className="text-3xl font-bold mt-32">Habilidades</h1>
        <hr style={{border: '1px solid #6d40ae'}} />
        <div>
          <Habilidades/>
        </div>
      </div>

      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
        {/* Conoceme mas */}
        <h1 className="mt-32 text-3xl font-bold">Conóceme</h1>
        <hr style={{border: '1px solid #6d40ae'}} />
        <div>
          <Conoceme/>
        </div>

      </div>
    </div>
  )
}

export default Profile

