import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { AiFillDashboard, AiFillHome, AiFillSpotify, AiOutlineAudit } from 'react-icons/ai'
import { MdHelpOutline } from 'react-icons/md'
import { FiSun, FiMoon } from 'react-icons/fi'

function Sidebar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [darkMode])

  return (
    <aside className="sidebar">
      <h1 className="logo">WebCraft</h1>
      <button className="toggle-btn" onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          <AiFillHome size={16} className='react-logo' />
          <span className='nav-text'>Home</span>
        </NavLink>
        <NavLink to="/mentor" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <AiOutlineAudit size={16} className='react-logo' />
          <span className='nav-text'>Mentor</span>
        </NavLink>
        <NavLink to="/submission-guide" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <MdHelpOutline size={16} className='react-logo' />
          <span className='nav-text'>How to Submit?</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
