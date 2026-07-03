function Itinerary() {
  return (
    <section className="container py-5" id="itinerario">
      <h2 className="text-center mb-4">Itinerario del viaje</h2>
      <div className="accordion" id="itineraryAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#diaUno">
              Día 1 - Llegada y recepción
            </button>
          </h2>
          <div id="diaUno" className="accordion-collapse collapse show" data-bs-parent="#itineraryAccordion">
            <div className="accordion-body">Recepción en destino, traslado al hotel y tiempo libre.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#diaDos">
              Día 2 - Tour principal
            </button>
          </h2>
          <div id="diaDos" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
            <div className="accordion-body">Recorrido turístico, excursiones y actividades guiadas.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#diaTres">
              Día 3 - Regreso
            </button>
          </h2>
          <div id="diaTres" className="accordion-collapse collapse" data-bs-parent="#itineraryAccordion">
            <div className="accordion-body">Desayuno, checkout y retorno al punto de origen.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Itinerary;
