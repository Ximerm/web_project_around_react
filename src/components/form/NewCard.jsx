export default function NewCard() {
  return (
    <form className="popup__form" name="card-form" id="form-addCard">
      <h2 className="popup__form-title">Nuevo lugar</h2>
      <input
        className="popup__form-input"
        type="text"
        name="name"
        id="input-title"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        autocomplete="off"
        required
      />
      <span className="input-error" id="input-title-error"></span>

      <input
        className="popup__form-input"
        type="url"
        name="link"
        id="input-link"
        placeholder="URL de la imagen"
        autocomplete="off"
        required
      />
      <span className="input-error" id="input-link-error"></span>

      <button
        type="submit"
        className="popup__form-submit popup__form-submit_disable"
        id="submitBtn-card"
      >
        Crear
      </button>
    </form>
  );
}
