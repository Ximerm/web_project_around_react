import { useEffect } from "react";
import FormValidator from "../../../../../FormValidator";

export default function NewCard({ title, handleAddCard }) {
  //Validar formulario
  useEffect(() => {
    const newCardForm = document.querySelector("#form-addCard");
    const formValidator = new FormValidator(newCardForm, {
      formSelector: ".popup__form",
      inputSelector: ".popup__form-input",
      submitButtonSelector: ".popup__form-submit",
      inactiveButtonClass: "popup__form-submit_disable",
      inputErrorClass: "popup__form-input_type_error",
      errorClass: "input-error",
    });
    formValidator.enableValidation();
  }, []);

  return (
    <form
      onSubmit={handleAddCard}
      className="popup__form"
      name="card-form"
      id="form-addCard"
    >
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
