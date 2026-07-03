function Carousel() {
  return (
    <section className="container py-5" id="destinos">
      <h2 className="text-center mb-4">Destinos destacados</h2>
      <div id="travelCarousel" className="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 carousel-img" alt="Playa tropical" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cancún</h5>
              <p>Playas paradisíacas y descanso total.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 carousel-img" alt="Montañas en Patagonia" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Patagonia</h5>
              <p>Aventura y naturaleza en el sur.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80" className="d-block w-100 carousel-img" alt="Ciudad turística" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Buenos Aires</h5>
              <p>Cultura, gastronomía y vida urbana.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#travelCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#travelCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default Carousel;
