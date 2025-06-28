import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';
import './ProductoDetalle.css';

export default function ProductoDetalle() {
  const { idCelular } = useParams();
  const celular = celulares.find(celus => celus.id === parseInt(idCelular));

  const [imagenPrincipal, setImagenPrincipal] = useState(0);

  if (!celular) return <p className="producto-no-encontrado">Producto no encontrado</p>;

  return (
    <section className="producto-detalle">
      <div className="galeria">
        <div className="imagen-principal">
          <img 
            src={celular.fotos[imagenPrincipal]} 
            alt={celular.nombre} 
            onError={(e) => e.target.src = 'https://via.placeholder.com/500x400?text=Sin+imagen'}
          />
        </div>
        <div className="miniaturas">
          {celular.fotos.map((foto, i) => (
            <img
              key={i}
              src={foto}
              alt={`${celular.nombre} ${i + 1}`}
              className={i === imagenPrincipal ? 'activa' : ''}
              onClick={() => setImagenPrincipal(i)}
            />
          ))}
        </div>
      </div>

      <div className="info-producto">
        <h2>{celular.nombre}</h2>
        <p className="precio">${celular.precio}</p>
        <p className="descripcion">{celular.descripcion}</p>
        <button className="boton-comprar">Comprar ahora</button>
      </div>
    </section>
  );
}