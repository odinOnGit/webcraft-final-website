import './Bob.css'

export const metadata = {
  name: 'Bob',
  title: 'UI Clone',
  tags: ['React', 'CSS']
}

export default function BobComponent() {
  return (
    <div className='mentee-card'>
      <h3>Hello from Bob!</h3>
      <p>This is my component</p>
    </div>
  )
}