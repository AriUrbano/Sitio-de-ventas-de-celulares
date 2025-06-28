import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos">
      <h1>Quiénes Somos</h1>
      <div className="contenido">
        <div className="texto">
          <p>CuervoCel es una empresa líder en la venta de dispositivos móviles de última generación.</p>
          <p>Fundada en 2010, nos hemos dedicado a ofrecer los mejores productos con el mejor servicio al cliente.</p>
          <p>Nuestro equipo profundamente Xeneize está compuesto por expertos en tecnología apasionados por ayudarte a encontrar el dispositivo perfecto para tus necesidades.</p>
        </div>
        <div className="imagen">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Equipo de CuervoCel"
            onError={(e) => e.target.src = '/placeholder-team.jpg'}
          />
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;