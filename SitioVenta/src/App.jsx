import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetails from './pages/ProductoDetalle';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/marca/:idMarca" element={<Productos />} />
          <Route path="productos/detalle/:idCelular" element={<ProductoDetails />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;