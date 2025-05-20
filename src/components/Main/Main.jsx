import profileAvatar from "../../images/Profile/Avatar.png";
import updateAvatar from "../../images/Profile/Update_Avatar_Icon.svg";
import editButton from "../../images/Profile/Edit_Button.svg";
import addButton from "../../images/Profile/Add_Button.svg";
import Popup from "./components/Popup/Popup";
import { useState } from "react";
import NewCard from "./components/Popup/forms/NewCard/NewCard";
import EditProfile from "./components/Popup/forms/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/forms/Avatar/EditAvatar";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/forms/ImagePopup/ImagePopup";

//Creación representación array de tarjetas
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  //Se crea un estado popup
  const [popup, setPopup] = useState(null);
  //Variable para que seleccione ImagePopup con la card seleccionada
  const [selectedCard, setSelectedCard] = useState(null);

  //Creación de variables que se pasarán como props en Popup.jsx
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard title={"Nuevo lugar"} />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile title={"Editar Perfil"} />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar title={"Cambiar foto de perfil"} />,
  };

  //Abrir popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  //Cerrar popup
  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
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
        {/*Se agrega Card*/}
        <ul className="card__element">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>

      {/* Renderizar el ImagePopup si se selecciona una imagen */}
      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={handleClosePopup} />
      )}

      {/*renderización condicional cuando popup no es null*/}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
