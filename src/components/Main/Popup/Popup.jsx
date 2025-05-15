import closeIcon from "../../../images/Popup/Close_Icon.svg";

export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;

  return (
    <section className="popup" id="popup-edit">
      <div className="popup__container">
        <img
          className="popup__close"
          src={closeIcon}
          alt="Ícono cerrar formulario"
          onClick={onClose}
        />
        <h3 className="popup__form-title">{title}</h3>
        {children}
      </div>
    </section>
  );
}
