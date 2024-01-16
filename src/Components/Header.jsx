import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex items-center justify-end p-4 border-b-2 border-cod-gray-800 h-20"
          style={{boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'}}>
      <Link to = '/' className="mx-4 text-white"><h4>Home</h4></Link>
      <Link to = '/aboutme' className="mx-4 text-white"><h4>About Me</h4></Link>
      <Link to = '/projects' className="mx-4 text-white"><h4>My Projects</h4></Link>
      <Link to = '/contact' className="mx-4 text-white"><h4>Contact</h4></Link>
      
    </div>
  )
}

export default Header