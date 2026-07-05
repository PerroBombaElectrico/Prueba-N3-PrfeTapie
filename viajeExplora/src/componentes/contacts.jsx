function Contact() {
  return (
    <section className="container py-5" id="contacto">
      <h2 className="text-center mb-4">Contacto</h2>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <form className="p-4 shadow rounded bg-light">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Ingresa tu correo"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="mensaje"
                rows="4"
                placeholder="Escribe tu mensaje"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;