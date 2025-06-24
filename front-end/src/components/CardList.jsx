import { useState } from 'react'
import Card from './Card'
import './CardList.css'

function CardList() {
  const [cards, setCards] = useState([
    {id:1},
    {id:2},
    {id:3},
  ])

  const handleAddCard = () => {
    const newId = cards.length > 0 ? cards[cards.length - 1].id + 1 : 1
    const newCard = { id: newId }
    setCards([...cards, newCard])
  }

  return (
    <div className='card-list'>
      <button onClick={handleAddCard}>Add Card</button>
      {cards.map((card) => (
        <Card key={card.id} id={card.id} />
      ))
      }
    </div>
  )
}

export default CardList