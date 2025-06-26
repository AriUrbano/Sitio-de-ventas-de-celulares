import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/CardCelular';
import './Productos.css';

const Productos = () => {
  const { idMarca } = useParams();
  const [celularesFiltrados, setCelularesFiltrados] = useState([]);

  useEffect(() => {
    if (idMarca) {
      const filtrados = celulares.filter(celular => celular.marcaId === parseInt(idMarca));
      setCelularesFiltrados(filtrados);
    } else {
      setCelularesFiltrados(celulares);
    }
  }, [idMarca]);

  return (
    <div className="productos-page">
      <h1>{idMarca ? marcas.find(m => m.id === parseInt(idMarca))?.nombre : 'Todos los productos'}</h1>
      <div className="productos-grid">
        {celularesFiltrados.map(celular => (
          <CardCelular key={celular.id} celular={celular} />
        ))}
      </div>
    </div>
  );
};

export default Productos;