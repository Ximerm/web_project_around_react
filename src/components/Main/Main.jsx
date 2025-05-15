import profileAvatar from "../../images/Profile/Avatar.png";
import updateAvatar from "../../images/Profile/Update_Avatar_Icon.svg";
import editButton from "../../images/Profile/Edit_Button.svg";
import addButton from "../../images/Profile/Add_Button.svg";

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={profileAvatar} alt="Avatar" />
          <button className="profile__edit-avatar">
            <img src={updateAvatar} alt="Botón para editar Avatar" />
          </button>
        </div>

        <div className="profile__content">
          <div className="profile__info">
            <p className="profile__name">Jacques Cousteau</p>
            <p className="profile__hobbie">Explorador</p>
          </div>
          <button className="profile__edit-button">
            <img
              className="profile__edit-button-img"
              src={editButton}
              alt="Botón para editar perfil"
            />
          </button>
        </div>
        <button className="profile__add-button">
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
    </main>
  );
}
