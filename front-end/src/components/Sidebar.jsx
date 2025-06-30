import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { AiFillDashboard, AiFillHome, AiFillSpotify, AiOutlineAudit } from 'react-icons/ai'
import { MdHelpOutline } from 'react-icons/md'
import { FiSun, FiMoon } from 'react-icons/fi'
import { MdOutlineMenu } from "react-icons/md";


function Sidebar() {

  const aside = document.querySelector('.sidebar');
  const root = document.documentElement;
  

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const [hamburgerOpen, setHamburgerOpen] = useState(window.innerWidth <= 500 ? false : true);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }



  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [darkMode])

  return (
    <>
    <div className="ham-button" onClick={toggleHamburger}><MdOutlineMenu id="hambutton" size={24}/></div>

    <aside className={hamburgerOpen ? "sidebar" : "sidebar-inactive"} >

      <h1 className="logo">WebCraft</h1>
      
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <AiFillHome className='react-logo' />
          <span className='nav-text'>Home</span>
        </NavLink>
        <NavLink to="/mentor" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <AiOutlineAudit className='react-logo' />
          <span className='nav-text'>Mentor</span>
        </NavLink>
        <NavLink to="/submission-guide" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <MdHelpOutline className='react-logo' />
          <span className='nav-text'>How to Submit?</span>
        </NavLink>
        
      </nav>
      <button className="toggle-btn" onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? <FiSun className='react-logo' color='white'/> : <FiMoon className='react-logo'/>}
        </button>
    </aside></>
  )
}

export default Sidebar
