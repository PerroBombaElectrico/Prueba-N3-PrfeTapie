function Destinations({ search }) {
  const destinos = [
    {
      nombre: "Cancún",
      tipo: "Internacional",
      precio: "$890.000",
      descripcion: "Playas hermosas, clima cálido y hoteles para unas vacaciones inolvidables."
    },
    {
      nombre: "Patagonia",
      tipo: "Nacional",
      precio: "$450.000",
      descripcion: "Paisajes naturales, montañas y aventura para quienes aman explorar."
    },
    {
      nombre: "San Pedro de Atacama",
      tipo: "Nacional",
      precio: "$280.000",
      descripcion: "Desierto, cielos increíbles y experiencias únicas en el norte de Chile."
    }
  ];

  const destinosFiltrados = destinos.filter((destino) =>
    destino.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Destinos destacados</h2>

      <div className="row g-4">
        {destinosFiltrados.length > 0 ? (
          destinosFiltrados.map((destino) => (
            <div className="col-12 col-md-6 col-lg-4" key={destino.nombre}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <span className="badge text-bg-primary mb-2">
                    {destino.tipo}
                  </span>

                  <h5 className="card-title">{destino.nombre}</h5>

                  <p className="card-text">{destino.descripcion}</p>

                  <p className="fw-bold mb-3">Desde {destino.precio}</p>

                  <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#packageModal"
                  >
                    Ver detalle
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted fs-5">No se encontraron destinos.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Destinations;