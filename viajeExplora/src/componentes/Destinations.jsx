function Destinations() {
  const destinos = [
    { nombre: "Cancún", tipo: "Internacional", precio: "$890.000" },
    { nombre: "Patagonia", tipo: "Nacional", precio: "$450.000" },
    { nombre: "San Pedro de Atacama", tipo: "Nacional", precio: "$280.000" }
  ];

  return (
    <section className="container pb-5">
      <div className="row g-4">
        {destinos.map((destino) => (
          <div className="col-12 col-md-6 col-lg-4" key={destino.nombre}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <span className="badge text-bg-primary mb-2">{destino.tipo}</span>
                <h5 className="card-title">{destino.nombre}</h5>
                <p className="card-text">Paquete ideal para vacaciones, escapadas y experiencias inolvidables.</p>
                <p className="fw-bold">Desde {destino.precio}</p>
                <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#packageModal">
                  Ver detalle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
