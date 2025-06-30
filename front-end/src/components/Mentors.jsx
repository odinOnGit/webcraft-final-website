import './Mentors.css'

function Mentor() {

  let MentorCards = [
    {
      id: 1,
      title: 'Anurag',
      number: 7499972586,
      thumbnail: 'photo.png',
      Link : {
        github : "",
        linkedin : "",
        instagram : "",
      }
    },
    {
      id: 2,
      title: 'Tezas',
      number: 7499972586,
      thumbnail: 'photo.png',
      Link : {
        github : "",
        linkedin : "",
        instagram : "",
      }
    },
    {
      id: 3,
      title: 'Nitansh',
      number: 7499972586,
      thumbnail: 'photo.png',
      Link : {
        github : "",
        linkedin : "",
        instagram : "",
      }
    },
  ];

  return (
    <section id='home' className='mentor-section'>
      <h2 className="title">Mentors Page</h2>

      <div className="card-list">
        {MentorCards.map(({ id, title, number, Link, thumbnail }) => (
          <div key={id} className="mentor-card">
            {thumbnail && <img src={thumbnail} alt={`${title} thumbnail`} className="card-thumbnail" />}
            <div className="card-info">
              <h3>{title}</h3>
              <p className="number">{number}</p>
              <a className='social' href={Link.github}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1-9o2QpmscStUAdG7QqF70KNYuSGRwNrQ&s'></img></a>
              <a className='social' href={Link.linkedin}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADu7u729vbY2NiMjIx+fn4bGxvb29vj4+Pm5ua8vLw8PDzz8/Pt7e35+fkoKChtbW1TU1OcnJyvr691dXVjY2ODg4NERETQ0NAVFRWhoaGzs7NUVFSUlJQ3NzcLCwvGxsYvLy9mZmZwcHBJSUkxMTHBwcEFeaSgAAAEc0lEQVR4nO2bbV+yMBSHB1oBiviYoeZDan7/b3jLxoo9UAbIkd3/61Udlu76MbazcWIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAl6fUS6j7cD39z2nlXhouNT92XezBa7r0v9kv3HOeexpy6Rw0z0QU9b0Ldp0Z5NQU975W6Vw0i7+B0Hfh+f33Of32m7ldj5M/gWygD/TcRGVD2qkFiobMsxp5FzJG18ckUlIpbmh41TLziy7we5ov/iqJDjTPgd6uvh1MePlD0qGn4eHwz4x/OTKd83pyZ8RlfP9rvT+MkfDSm5oVLFv/otd+jpulxw5F5IeBTjQMZuPuGiX0qZeyQxcdx+z1qnGFmsjbja1dmGrYoMeHmi/b70zwbPkxDPdx3J/cecZV3PTzlYQcWC1aSZG9t6XhXicROSUlrhKDnwkyaMRM6x6+1L8pPNSwzbEeZ5scWp8v1psUDeajh0EFNkp9aqJypu9Ukvakp+O7IEYbkSRd04wCjSKicmb5G1P25B+F2+pLZvbzPjAzHGeIoDCNXFsH7kPhhaNlrOkHSX5/G8jEeH7eHRxoKYSlywfDLGsgJqb8c65Ox97p5FEnfttwL5NbfWEskO375YM0YPG/1IC9a6xhmR+XBueyq9yDLak3DmRrZay3GliOgtqlj+Mbev35endZpGI2iKEzny8K4pX9fXsdwPJQ/LVI1j/XnO3mJfKQKw7QXFwlfDMNFUmzQ2xRNt7Y0PZX5/FObOhaEYaAGY9NQe0sz+PablE2Zm/ypJN5KWw39Pxhuyj97tFOHOw01Dfc/p+lipI5JN5v1DFe/paFiViU9tatnqP2dSV4IQbkhq2V4w2J34A2PjfS1GnUMjaNyG+LsjvDUoI7hr2M0I6J+EmsY3ljdx19vEVau1DC8cTsv3mPRVa5UNywknNec74f3VJ+Wv2+RyoarfA8fzI7Da3q2H07mJdMJ32EZZVetUdlQZJsXZYN/tA7cPu1sWtmQtzPeB1hXSH7FUrTTDhUNN1nCHeh+nn07eC670AoVDbNrkUXQeheXWZys7KGiYYY8Qnye96MoncsTDfOB46UrZO8jqxvmlcTfW/hAbAdNFZ4A7Zrs9V+obJg/hMUJJBHnNvZq1T3VJrGyobiFFyUmaleMpiEPd81QVMTp0wdvutJdhDhVdU5Vw4F1VhkZI/f7O7pm+GyfVHgKoNccd9OQ1/ib54S8rb6t6qahfdYUlYBj63d0zJCvFXtzcRdZtvU7OmZ44PfKXABCZwx5Lf+n+XGhTaaThnyxsOxqRTauvclw0FDbCDto6P49hGGrwJDBUAWGBMCQwVAFhgTAkMFQBYYEwJDBUAWGBMCQwVAFhgTAkMFQBYYEwJDBUKUrhjf+31OXDNPYL2L73zWlRTz/0TBQPs0PHsDQyk3/Jathr8iE4V2BIfsfDJdlDfTaJyarTR7KkPVKkS2SX1v86eMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwfvB45CK79h/YAAAAASUVORK5CYII='></img></a>
              <a className='social' href={Link.instagram}><img src='https://www.svgrepo.com/show/506668/instagram.svg'></img></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Mentor