import closeIcon from "../../../../../../images/Popup/Close_Icon.svg";

export default function RemoveCard(props) {
  const { onClose } = props;
  return (
    <section className="popup" id="popup-delete-card">
      <div className="popup__container">
        <img
          className="popup__close"
          src={closeIcon}
          alt="Ícono cerrar formulario"
          onClick={onClose}
        />
        <form
          className="popup__form popup__form_height_low"
          id="form-deleteCard"
        >
          <h2 className="popup__form-title popup__form-title_small_padding">
            ¿Estás seguro?
          </h2>
          <button
            type="submit"
            className="popup__form-submit popup__form-submit_margin_none"
            id="submitDelete-card"
          >
            Sí
          </button>
        </form>
      </div>
    </section>
  );
}
