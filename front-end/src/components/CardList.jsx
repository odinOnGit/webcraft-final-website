import Card from './Card'
import './CardList.css'

function CardList() {
  const cards = [1, 2, 3, 4]

  return (
    <div className='card-list'>
      {cards.map((id) => (
        <Card key={id} id={id}></Card>
      ))}
    </div>
  )
}

export default CardList