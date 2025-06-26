import { useEffect, useState } from 'react'

export default function BobComponent() {
  console.log('bob renderingg')
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours()

  const secondDeg = seconds * 6
  const minuteDeg = minutes * 6 + seconds * 0.1
  const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30

  const handStyle = (deg, width, color) => ({
    transform: `rotate(${deg}deg)`,
    transformOrigin: 'bottom center',
    height: width,
    background: color,
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    width: '4px',
    borderRadius: '4px',
  })

  return (
    <div style={styles.container}>
      <div style={styles.clock}>
        <div style={handStyle(hourDeg, '35%', '#333')} />
        <div style={handStyle(minuteDeg, '45%', '#555')} />
        <div style={handStyle(secondDeg, '50%', 'red')} />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.number,
              transform: `rotate(${i * 30}deg) translateY(-90px)`,
            }}
          >
            {i === 0 ? 12 : i}
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clock: {
    position: 'relative',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '5px solid #333',
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    background: '#f9f9f9',
  },
  number: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transformOrigin: 'center center',
    fontSize: '14px',
    fontWeight: 'bold',
  },
}