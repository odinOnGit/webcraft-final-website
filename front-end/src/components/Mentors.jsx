import './Mentors.css'

function Mentor() {

  let MentorCards = [
    {
      id: 1,
      title: 'Anurag',
      number: 7499972586,
      description: 'alala',
      thumbnail: 'photo.png'
    },
    {
      id: 2,
      title: 'Tezas',
      number: 7499972586,
      description: 'alala',
      thumbnail: 'photo.png'
    },
    {
      id: 3,
      title: 'Nitansh',
      number: 7499972586,
      description: 'alala',
      thumbnail: 'photo.png'
    },
  ];

  return (
    <section id='home' className='mentor-section'>
      <h2 className="title">Mentors Page</h2>

      <div className="card-list">
        {MentorCards.map(({ id, title, number, description, thumbnail }) => (
          <div key={id} className="mentor-card">
            {thumbnail && <img src={thumbnail} alt={`${title} thumbnail`} className="card-thumbnail" />}
            <div className="card-info">
              <h3>{title}</h3>
              <p className="number">{number}</p>
              <p className="description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Mentor