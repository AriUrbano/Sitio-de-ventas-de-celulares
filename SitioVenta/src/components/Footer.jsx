import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="/quienes-somos">Quiénes Somos</a>
          <a href="/contacto">Contacto</a>
          <a href="/productos">Productos</a>
        </div>
        <p className="copyright">© 2025 CuervoCel. - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;