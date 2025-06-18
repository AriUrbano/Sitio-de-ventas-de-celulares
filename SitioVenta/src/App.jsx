import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./layouts/MainLayout" 
import Home from "./pages/Home" 
import Contacto from "./pages/Contacto" 
import ProductosDetalle from "./pages/ProductoDetalle" 
import Productos from "./pages/Productos"
import QuienesSomos from "./pages/QuienesSomos"  
import './App.css'


const App = () => {
return (
  
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Layout/>}></Route>
          <Route path="/Home" element= {<Home/>}></Route>
          <Route path="/Contacto" element= {<Contacto/>}></Route>
          <Route path="/ProductosDetalle" element= {<ProductosDetalle/>}></Route>
          <Route path="/Productos" element= {<Productos/>}></Route>
          <Route path="/Quienes-somos" element= {<QuienesSomos/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  
);
};
export default App
