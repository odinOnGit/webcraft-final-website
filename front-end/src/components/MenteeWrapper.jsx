import { useParams } from "react-router-dom";

const modules = import.meta.glob('../mentees/**/index.jsx', { eager: true })

export default function MenteeWrapper() {
  const { name } = useParams()
  const entry = Object.entries(modules).find(([path]) => path.includes(`/mentees/${name}/`))

  if(!entry) return <div>Component not found for {name}</div>

  const module = entry[1]
  const Component = module.default 
  const meta = module.meta

  return (
    <div>
      <h2>{meta?.title || `${name}'s Component`}</h2>
      <Component />
    </div>
  )
}