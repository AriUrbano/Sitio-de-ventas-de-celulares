import { marcas, celulares } from '../data/data';
import './Home.css';

const Home = () => {

  const recibirCelular = (marcaId) => {
    return celulares.find(celular => celular.marcaId === marcaId);
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Bienvenido a CuervoCel</h1>
          <p>Especialistas en los mejores celulares del mercado</p>
          <a href="/productos" className="cta-button">Ver Productos</a>
        </div>
      </section>

      <section className="marcas-section">
        <div className="container">
          <h2 className="section-title">Marcas Destacadas</h2>
          <div className="marcas-grid">
            {marcas.map(marca => {
              const phone = recibirCelular(marca.id);
              return (
                <a 
                  key={marca.id} 
                  href={`/productos/marca/${marca.id}`} 
                  className="marca-card"
                >
                  <h3>{marca.nombre}</h3>
                  {phone && (
                    <img
                      src={phone.fotos[0]}
                      alt={phone.nombre}
                      className="marca-image"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Sin+imagen'}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;