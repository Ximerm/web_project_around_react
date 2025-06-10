export default function NewCard({ title }) {
  return (
    <form className="popup__form" name="card-form" id="form-addCard">
      {title && <h3 className="popup__form-title">{title}</h3>}
      <input
        className="popup__form-input"
        type="text"
        name="name"
        id="input-title"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        autoComplete="off"
        required
      />
      <span className="input-error" id="input-title-error"></span>

      <input
        className="popup__form-input"
        type="url"
        name="link"
        id="input-link"
        placeholder="URL de la imagen"
        autoComplete="off"
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
