import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-primary text-white">
      <nav className="container mx-auto flex items-center justify-between p-4" aria-label="Primary">
        <Link to="/" className="text-xl font-bold">VAS Detailing</Link>
        <ul className="flex gap-4">
          {['about','services','gallery','reviews','contact','quote'].map(p => (
            <li key={p}>
              <NavLink 
                to={`/${p === 'quote' ? 'quote' : p}`} 
                className={({isActive})=>isActive?'underline':'hover:underline'}
              >
                {p.charAt(0).toUpperCase()+p.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
