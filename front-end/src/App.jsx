import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardList from './components/CardList'
import Sidebar from './components/Sidebar'
import Mentor from './components/Mentors'
import Submit from './components/Submit' // Create this component for "How to submit"

const modules = import.meta.glob('./mentees/*.jsx', { eager: true })
const menteeRoutes = Object.entries(modules).map(([path, module]) => {
  const name = path.split('/').pop().replace('.jsx', '')
  return { name, Component: module.default }
})

function App() {
  return (
    <Router>
      <Sidebar />
      <main style={{ marginLeft: '220px', padding: '2rem' }} className='main-content'>
        <Routes>
          <Route path="/" element={<CardList />} />
          {menteeRoutes.map(({ name, Component }) => (
            <Route key={name} path={`/details/${name}`} element={<Component />} />
          ))}
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/submission-guide" element={<Submit />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
