import { Link } from 'react-router-dom'
import './Card.css'

function Card({ id }) {
  return (
    <Link to='/details' className='card'>
      <h3>Card {id}</h3>
      <p>Click to open component</p>
    </Link>
  )
}

export default Card