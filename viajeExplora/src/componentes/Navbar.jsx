function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">ViajeXplora</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#destinos">Destinos</a></li>
            <li className="nav-item"><a className="nav-link" href="#itinerario">Itinerario</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar destino" />
            <button className="btn btn-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
