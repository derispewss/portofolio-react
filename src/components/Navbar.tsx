import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="p-4 shadow flex justify-between">
        <h1 className="text-sky-500 font-bold">Deris</h1>
        <nav className="space-x-4">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'text-sky-500' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-sky-500' : ''}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-sky-500' : ''}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-sky-500' : ''}>Contact</NavLink>
        </nav>
    </header>
  )
}

export default Navbar