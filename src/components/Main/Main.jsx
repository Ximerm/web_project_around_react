import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import profileAvatar from "../../images/Profile/Avatar.png";
import updateAvatar from "../../images/Profile/Update_Avatar_Icon.svg";
import editButton from "../../images/Profile/Edit_Button.svg";
import addButton from "../../images/Profile/Add_Button.svg";
import Popup from "./components/Popup/Popup";

import NewCard from "./components/Popup/forms/NewCard/NewCard";
import EditProfile from "./components/Popup/forms/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/forms/Avatar/EditAvatar";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/forms/ImagePopup/ImagePopup";
import RemoveCard from "./components/Popup/forms/RemoveCard/RemoveCard";

import api from "../../utils/api";

export default function Main() {
  //Obtener el valor de currentUser
  const { currentUser } = useContext(CurrentUserContext);

  //Obtener tarjetas
  const [cards, setCards] = useState([]);

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

  const removeCardPopup = {
    children: <RemoveCard />,
  };

  //LLamar a las tarjetas desde la API
  useEffect(() => {
    (async () => {
      await api.getInitialCards().then((data) => {
        setCards(data);
      });
    })();
  }, []);

  //Abrir popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  //Cerrar popup
  function handleClosePopup() {
    setPopup(null);
    setSelectedCard(null);
  }

  //Agrega el soporte de "likes" y "dislikes"
  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Avatar"
          />
          <button
            className="profile__edit-avatar"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img src={updateAvatar} alt="Botón para editar Avatar" />
          </button>
        </div>

        <div className="profile__content">
          <div className="profile__info">
            <p className="profile__name">{currentUser.name}</p>
            <p className="profile__hobbie">{currentUser.about}</p>
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
              handleOpenPopup={() => {
                setSelectedCard(card);
              }}
              handleRemoveCard={() => {
                setPopup(removeCardPopup);
              }}
              onCardLike={() => handleCardLike(card)}
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
