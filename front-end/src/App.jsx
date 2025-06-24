import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CardList from './components/CardList'
import Details from './components/Details'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<CardList />} />
        <Route path='/details' element={<Details />} />
      </Routes>
      
    </Router>
  )
}

export default App