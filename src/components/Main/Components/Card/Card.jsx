import cardDelete from "../../../../images/Places/Trash_Vector.svg";
import cardLike from "../../../../images/Places/Like_Vector.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;
  const imageComponent = { name, link };
  return (
    <li className="card__content">
      <img
        className="card__photo-delete"
        src={cardDelete}
        alt="Ícono eliminar"
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
          className="card__photo-like"
          src={cardLike}
          alt="Ícono 'Me gusta'"
        />
      </div>
    </li>
  );
}
