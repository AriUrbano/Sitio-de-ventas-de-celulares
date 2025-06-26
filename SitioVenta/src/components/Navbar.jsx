import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../data/data';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/"> 🐦‍⬛ CuervoCel</Link>
      </div>

      <nav className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quienes-somos">Quiénes Somos</NavLink>

        <div className="dropdown">
          <span className="dropdown-toggle">Productos ▾</span>
          <div className="dropdown-content">
            <NavLink to="/productos">Ver Todos</NavLink>
            {marcas.map(marca => (
              <NavLink key={marca.id} to={`/productos/marca/${marca.id}`}>
                {marca.nombre}
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;