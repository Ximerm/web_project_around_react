import cardDelete from "../../../../images/Places/Trash_Vector.svg";
import cardLike from "../../../../images/Places/Like_Vector.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;
  const { handleRemoveCard } = props;
  const { onCardLike } = props;
  const imageComponent = { name, link };

  // Controlador de clics para manejar el "like"
  function handleLikeClick() {
    // Llamar a onCardLike pasando la tarjeta
    onCardLike(props.card);
  }

  return (
    <li className="card__content">
      <img
        className="card__photo-delete"
        src={cardDelete}
        alt="Ícono eliminar"
        onClick={handleRemoveCard}
      />
      <img
        className="card__photo"
        alt={name}
        src={link}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <div className="card__info">
        <h2 className="card__photo-name">{name}</h2>
        <img
          className={`card__photo-like ${
            isLiked ? "card__photo-like_active" : ""
          }`}
          src={cardLike}
          alt="Ícono 'Me gusta'"
          onClick={() => handleLikeClick(card)}
        />
      </div>
    </li>
  );
}
