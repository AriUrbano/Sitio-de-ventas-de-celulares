import { Link } from 'react-router-dom';
import './CardCelular.css';

export default function CardCelular({ celular }) {
  return (
    <article className="card-celular">
      <h3>{celular.nombre}</h3>
      <img
        src={celular.fotos[0]}
        alt={celular.nombre}
        onError={(e) => e.target.src = 'https://via.placeholder.com/200x150?text=Sin+imagen'}
      />
      <p className="precio">${celular.precio}</p>
      <Link to={`/productos/detalle/${celular.id}`} className="ver-detalle">Ver detalle</Link>
    </article>
  );
}