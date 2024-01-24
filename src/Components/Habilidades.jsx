import React from 'react'
import js from '../img/js.png'
import java from '../img/java.png'
import react from '../img/react.png'
import html from '../img/html-5.png'
import css from '../img/css-3.png'
import tailwind from '../img/Tailwind_CSS_Logo.svg.png'
import vsc from '../img/vsc.png'
import intelliji from '../img/intelliji.png'
import mysql from '../img/mysql.webp'

const Habilidades = () => {
  return (
    <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-20 xl:mx-10">
        <div className="flex flex-col sm:flex-row my-4 sm:my-10">
            <div className="w-full sm:w-40 mr-4 sm:mr-28">
                <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold  text-center sm:text-left">Maquetación Web</h3>
            </div>
           <div className="flex lg:flex-row items-center justify-center lg:justify-between">
                <img src={html} alt="html" className= "h-3.2 w-3.2  mr-10 xl:mr-28 lg:mr-10 sm:mr-10"/>
                <img src={css} alt="css" className= "h-3.2 w-3.2  mr-10 xl:mr-28 lg:mr-10 sm:mr-10"/>
                <img src={tailwind} alt="tailwind" className= "h-3.2 w-3.2 mr-10 xl:mr-28 lg:mr-10 sm:mr-10" />
            </div>
        </div>

        <div className="flex flex-col sm:flex-row my-4 sm:my-10">
            <div className="w-full sm:w-40 mr-4 sm:mr-28">
                <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold text-center sm:text-left">Lenguajes de Programación</h3>
            </div>
            <div className="flex lg:flex-row items-center justify-center lg:justify-between">
                <img src={js} alt="javaScript" className= "h-3.2 w-3.2  mr-10 xl:mr-28 lg:mr-10 sm:mr-10" />
                <img src={java} alt="java" className= "h-3.2 w-3.2  mr-10 xl:mr-28 lg:mr-10 sm:mr-10"/>  
            </div>
        </div>

        <div className="flex flex-col sm:flex-row my-4 sm:my-10">
            <div className="w-full sm:w-40 mr-4 sm:mr-28">
                <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold text-center sm:text-left">Entornos de Desarrollo</h3>
            </div>
            <div className="flex lg:flex-row items-center justify-center lg:justify-between">
                <img src={vsc} alt="visual studio code" className= "h-3.2 w-3.2  mr-10 xl:mr-28 lg:mr-10 sm:mr-10" />
                <img src={intelliji} alt="intelliji" className= "h-3.2 w-3.2 mr-10 xl:mr-28 lg:mr-10 sm:mr-10"/>  
            </div>
        </div>

        <div className="flex flex-col sm:flex-row my-4 sm:my-10">
            <div className="w-full sm:w-40 mr-4 sm:mr-28">
                <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold text-center sm:text-left">Librerias y Frameworks</h3>
            </div>
            <div className="flex lg:flex-row items-center justify-center lg:justify-between">
                <img src={react} alt="react" className= "h-3.2 w-3.2 mr-10 xl:mr-28 lg:mr-10 sm:mr-10"/>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row my-4 sm:my-10">
            <div className="w-full sm:w-40 mr-4 sm:mr-28">
                <h3 className="text-cod-gray-purpura-conoceme text-2xl font-bold text-center sm:text-left">Bases de Datos</h3>
            </div>
            <div className="flex lg:flex-row items-center justify-center lg:justify-between">
            <img src={mysql} alt="mysql" className= "h-3.2 w-3.2 mr-10 xl:mr-28 lg:mr-10 sm:mr-10" />
            </div>
        </div>
    </div>
  )
}

export default Habilidades