import {Link} from "react-router-dom";

export const Layout = () => {
    return (
        <>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to={"/Home"}> Home </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to={"/QuienesSomos"}> Quienes somos </Link>
        </li>
        <li class="nav-item">
             <Link class="nav-link active" aria-current="page" to={"/Contacto"}> Contacto </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
          <li><Link class="nav-link active" aria-current="page" to={"/ProductoDetalle/:1"}> iPhone 14 Pro </Link></li>
          <li><Link class="nav-link active" aria-current="page" to={"/ProductoDetalle/:2"}> Samsung Galaxy S23 </Link></li>
          <li><Link class="nav-link active" aria-current="page" to={"/ProductoDetalle/:3"}> Xiaomi 13 Pro </Link></li>
          <li><Link class="nav-link active" aria-current="page" to={"/ProductoDetalle/:4"}> Motorola Edge 40 </Link></li>
          <li><Link class="nav-link active" aria-current="page" to={"/Productos"}> Ver todo </Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>  
    );
    };

