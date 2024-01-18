import Header from "./Components/Header"
import Profile from "./Components/Profile"
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import MyProjects from './Pages/MyProjects'
import Contact from './Pages/Contact'
import { Route, Routes } from "react-router-dom"
import './Styles/App.css'
import Footer from "./Components/Footer"

function App() {
  

  return (
    <>
    
    <Header/>
    <Profile/>
    <Footer/>

    </>
  )
}

export default App
