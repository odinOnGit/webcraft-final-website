import { Link } from 'react-router-dom'
import './CardList.css'

const modules = import.meta.glob('../mentees/**/index.jsx', { eager: true })

function CardList() {
  const menteeCards = Object.entries(modules).map(([path, module]) => {
    const name = path.split('/')[2] // mentee folder name
    const meta = module.meta || {}
    return {
      name,
      title: meta.title || `${name}'s App`,
      author: meta.author || name,
      description: meta.description || '',
      thumbnail: meta.thumbnail || '', // fallback empty
    }
  })

  return (
    <>
    <h2>Submissions</h2>
    <div className="card-list">
      {menteeCards.map(({ name, title, author, description, thumbnail }) => (
        <Link key={name} to={`/details/${name}`} className="mentee-card">
          {thumbnail && <img src={thumbnail} alt={`${title} thumbnail`} className="card-thumbnail" />}
          <div className="card-info">
            <h3>{title}</h3>
            <p className="author">by {author}</p>
            <p className="description">{description}</p>
          </div>
        </Link>
      ))}
    </div>
    </>
  )
}

export default CardList
