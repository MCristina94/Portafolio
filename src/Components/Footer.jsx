import React from 'react'
import logoFooter from '../img/iconoFooter.png'
import '../Styles/footer.module.css'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bgFooter" style={{height: '20vh'}}>
      <img className="" style={{height: '8vh'}} src={logoFooter} alt="logo footer" />
      <div>
        <p className="text-cod-gray-purpura-conoceme">¡Gracias por visitar mi sitio web!</p>
      </div>
      <div>
        <a href="https://github.com/MCristina94/ctd-fe3-final" target="_blank">
          <i
            class="fa-brands fa-github"
            style={{ color: "#8f8ad4", width: "30px" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/maurin-cristina-a-8b349615b/" target="_blank">
          <i
            class="fa-brands fa-linkedin"
            style={{ color: "#8f8ad4", width: "30px" }}
          ></i>
        </a>
        
      </div>
    </div>
  )
}

export default Footer