import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [darkMode])

  return (
    <header className='header'>
      <h1>
        WebCraft
      </h1>
      <nav>
        <button className='toggle-btn' onClick={() => setDarkMode(prev => !prev)}>{darkMode ? '🌞' : '🌙'}</button>
        <a href="home">Home</a>
        <a href="mentor">Mentor</a>
      </nav>
    </header>
  )
}

export default Header