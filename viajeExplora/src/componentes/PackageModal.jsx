function PackageModal() {
  return (
    <div className="modal fade" id="packageModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalle del paquete</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <p><strong>Incluye:</strong> transporte, alojamiento y asistencia básica.</p>
            <p><strong>Duración:</strong> 3 días / 2 noches.</p>
            <p><strong>Promoción:</strong> reserva anticipada con descuento.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageModal;
