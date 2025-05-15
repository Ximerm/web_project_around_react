import profileAvatar from "../../images/Profile/Avatar.png";
import updateAvatar from "../../images/Profile/Update_Avatar_Icon.svg";
import editButton from "../../images/Profile/Edit_Button.svg";
import addButton from "../../images/Profile/Add_Button.svg";
import Popup from "./Popup/Popup";
import { useState } from "react";
import NewCard from "../form/NewCard/NewCard";
import EditProfile from "../form/EditProfile/EditProfile";
import EditAvatar from "../form/EditAvatar/EditAvatar";

export default function Main() {
  //Se crea un estado popup
  const [popup, setPopup] = useState(null);

  //Creación de variables que se pasarán como props
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  //Abrir popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  //Cerrar popup
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={profileAvatar} alt="Avatar" />
          <button
            className="profile__edit-avatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img src={updateAvatar} alt="Botón para editar Avatar" />
          </button>
        </div>

        <div className="profile__content">
          <div className="profile__info">
            <p className="profile__name">Jacques Cousteau</p>
            <p className="profile__hobbie">Explorador</p>
          </div>
          <button
            aria-label="Add card"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            <img
              className="profile__edit-button-img"
              src={editButton}
              alt="Botón para editar perfil"
            />
          </button>
        </div>
        <button
          className="profile__add-button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img
            className="profile__add-button-img"
            src={addButton}
            alt="Botón para agregar nueva imagen"
          />
        </button>
      </section>

      <section className="card">
        <div className="card__element">
          {/* Plantilla Card--> */}
          <template id="card-template">
            <div classNameName="card__content">
              <img
                className="card__photo-delete"
                src="../images/Places/Trash_Vector.svg"
                alt="Ícono eliminar"
              />
              <img className="card__photo" alt="" src="" />
              <div className="card__info">
                <h2 className="card__photo-name"></h2>
                <img
                  className="card__photo-like"
                  src="../images/Places/Like_Vector.svg"
                  alt="Ícono 'Me gusta'"
                />
              </div>
            </div>
          </template>
        </div>
      </section>

      {/*renderización condicional cuando popup no es null}*/}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
