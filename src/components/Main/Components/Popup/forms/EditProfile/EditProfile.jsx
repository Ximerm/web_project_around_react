export default function EditProfile({ title }) {
  return (
    <form className="popup__form" id="form-profile">
      {title && <h3 className="popup__form-title">{title}</h3>}
      <input
        className="popup__form-input"
        type="text"
        name="name"
        id="input-name"
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        autoComplete="off"
        required
      />
      <span className="input-error" id="input-name-error"></span>

      <input
        className="popup__form-input"
        type="text"
        name="about"
        id="input-about"
        placeholder="Acerca de mí"
        minLength="2"
        maxLength="200"
        autoComplete="off"
        required
      />
      <span className="input-error" id="input-about-error"></span>

      <button
        type="submit"
        className="popup__form-submit popup__form-submit_disable"
        id="submitBtn-profile"
      >
        Guardar
      </button>
    </form>
  );
}
