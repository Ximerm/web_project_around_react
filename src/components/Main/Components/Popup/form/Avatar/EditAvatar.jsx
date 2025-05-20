export default function EditAvatar() {
  return (
    <form className="popup__form" id="form-avatar">
      <input
        type="url"
        className="popup__form-input"
        id="input-avatar-url"
        name="avatar"
        placeholder="URL de la imagen"
        required
      />
      <span className="input-error input-avatar-error"></span>
      <button type="submit" className="popup__form-submit">
        Guardar
      </button>
    </form>
  );
}
