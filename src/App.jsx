import Header from "./Components/Header"
import Profile from "./Components/Profile"
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import MyProjects from './Pages/MyProjects'
import Contact from './Pages/Contact'
import { Route, Routes } from "react-router-dom"
import './Styles/App.css'

function App() {
  

  return (
    <>
    
    <Header/>
    <Profile/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/aboutme" element={ <Aboutme/> }/>
      <Route path="/projects" element={ <MyProjects/> }/>
      <Route path="/contact" element={ <Contact/> }/>
    </Routes>

    </>
  )
}

export default App
