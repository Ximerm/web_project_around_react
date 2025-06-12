import { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import api from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  // Estado del popup
  const [popup, setPopup] = useState(null);

  //Obtener tarjetas
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
        api.getInitialCards().then((data) => {
          setCards(data);
        });
      });
    })();
  }, []);

  //Abrir popup
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  // Función para cerrar el popup
  function handleClosePopup() {
    setPopup(null);
  }

  //Cambiar información de perfil
  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .updateUser(data.name, data.about)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  //Cambiar Avatar
  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
        .updateUserAvatar(data.avatar)
        .then((updatedUser) => {
          setCurrentUser(updatedUser);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  //Agrega el soporte de "likes" y "dislikes"
  async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;

    await api
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

  //Eliminar tarjeta
  function handleCardDelete(cardId) {
    api
      .removeCard(cardId)
      .then(() => {
        setCards(
          (state) => state.filter((currentCard) => currentCard._id !== cardId) // Filtrar la tarjeta eliminada
        );
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }

  //Agregar Nueva tarjeta
  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .addNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleCardLike,
        handleCardDelete,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
